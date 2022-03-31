import { google, sheets_v4 } from "googleapis";
import { Compute, GoogleAuth, JWT, UserRefreshClient } from "googleapis-common";
import { ExtraSystemElement, Fabric, Modification, ModificationGroup, System, SystemElement, SystemGroup } from "../types";
import base64 from 'base-64'
import utf8 from 'utf8'
import fs, { unlinkSync } from 'fs'
import * as translit from "transliteration";
import mime from 'mime-types'
import axios from "axios";
import IMAGE_DICT from "../data/images";
// @ts-ignore
import tranlitNpm from 'translit-npm'
import { generateHash } from "./crypt";
import { randomUUID } from "crypto";

class GoogleSpreadSheets {
  private auth: GoogleAuth;
  // client?: Compute | JWT | UserRefreshClient | Impersonated | BaseExternalAccountClient;
  private googleSheetsInstance?: sheets_v4.Sheets
  systemGroups: SystemGroup[] = [];
  systems: System[] = [];
  systemElements: SystemElement[] = [];
  modificationGroups: ModificationGroup[] = []
  modifications: Modification[] = []
  extraSystemElements: ExtraSystemElement[] = []
  classicFabrics: Fabric[] = []
  dayNightFabrics: Fabric[] = []
  errorImageDict: {
    [key: string]: string
  } = {}
  extraImageDict: {
    [key: string]:  string
  } = {}
  imageDict: {
    [key: string]: {
      url: string,
      downloadUrl: string,
      extension: string,
      fileName: string,
      path: string
    }
  } = {}

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: "keys.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    if (fs.existsSync('metadata/images.json')) {
      this.imageDict = JSON.parse(fs.readFileSync('metadata/images.json', { encoding: 'utf-8'}))
    }
    if (fs.existsSync('metadata/images_extra.json')) {
      this.extraImageDict = JSON.parse(fs.readFileSync('metadata/images_extra.json', { encoding: 'utf-8' }))
    }
  }

  private async downloadImage(title: string, yandexDiskUrl: string): Promise<string | undefined> {
    let downloadUrl = yandexDiskUrl
    if (!downloadUrl) return undefined

    // Format url for downloading
    if (yandexDiskUrl.includes('disk')) downloadUrl = `https://getfile.dokpub.com/yandex/get/${yandexDiskUrl}`

    // Filename without extension and extra symbols, for using as a key and filename
    let generatedFileName = randomUUID()
    while (this.imageDict[generatedFileName]) {
      generatedFileName = randomUUID()
    }

    // If image already handled in runtime
    if (this.imageDict[yandexDiskUrl] && yandexDiskUrl === this.imageDict[yandexDiskUrl].url) return `_nuxt/img/${this.imageDict[yandexDiskUrl].fileName}.${this.imageDict[yandexDiskUrl].extension}`

    // If extra image already handled in runtime
    if (this.extraImageDict[yandexDiskUrl]) return `_nuxt/img/${this.extraImageDict[generatedFileName]}`

    try {
      // Download image
      const response = await axios({
        url: downloadUrl,
        method: 'GET',
        responseType: 'stream'
      })
      // Image extension
      const extension = mime.extension(response.headers['content-type']) || 'png'
      // Uplaod path for saving new file      
      const uploadPath = `metadata/parsed_images/${generatedFileName}.${extension}`
      // Writer for new file
      const writer = fs.createWriteStream(uploadPath)
      response.data.pipe(writer)
      await new Promise((resolve, reject) => {
        writer.on('finish', () => {
          // if (isSuccessLog) console.log(`IMAGE - ${title || 'N/A'}: SUCCESS.  URL: ${yandexDiskUrl}.  New URL: ${uploadPath}`)
          resolve('')
        })
        writer.on('error', (e) => {
          reject(e)
        })
      })

      this.imageDict[yandexDiskUrl] = {
        url: yandexDiskUrl,
        downloadUrl: downloadUrl,
        extension: extension,
        fileName: generatedFileName,
        path: uploadPath
      }
      console.log(`Success: ${title} - ${generatedFileName}.${extension}`);
      return  `_nuxt/img/${generatedFileName}.${extension}`
    } catch (e) {
      console.log(e);
      // If error write to query for handling
      if (!this.errorImageDict[yandexDiskUrl]) this.errorImageDict[yandexDiskUrl] = ''

      console.error(`IMAGE - ${title || 'N/A'}: ERROR.  URL: ${yandexDiskUrl}`)
      return undefined
    }
  }

  private async generateImageUrl(title: string, url: string) {
    return await this.downloadImage(title, url)
  }

  private generateBase64Id(key: string) {
    return base64.encode(utf8.encode(key.toLocaleLowerCase()))
  }

  private getAuthObject(data: {
    sheetName: 'Ткани классика' | 'Коллекция тканей классика' | 'Ткани день/ночь' | 'Коллекция тканей день/ночь' | 'Ткани данные' | 'Группа систем' | 'Система' | 'Модификаторы данные' | 'Модификаторы',
    fromLetter:  string,
    toLetter: string
    startNumber: number,
    lastRowNumber: number
  }): sheets_v4.Params$Resource$Spreadsheets$Values$Get {
    return {
      auth: this.auth,
      spreadsheetId: '1Wpf2juswOUIY5N11KaB5EvNbPkf15Kjd0E4VO6Z1fTo',
      range: `${data.sheetName}!${data.fromLetter}${data.startNumber}:${data.toLetter}${data.lastRowNumber}`
    }
  }


  async init() {
    const client = await this.auth.getClient()
    this.googleSheetsInstance = google.sheets({ version: "v4", auth: client });

    this.systemGroups = await this.getSystemGroups();
    // console.log(this.systemGroups)
    this.systems = await this.getSystems()
    // console.log(this.systems)
    this.modificationGroups = await this.getModificationGroups()
    // console.log(this.modificationGroups)
    this.modifications = await this.getModifications()
    // console.log(this.modificationGroups)
    this.systemElements = await this.getSystemElements()
    // console.log(this.systemElements.map(el => el.colorList))
    this.extraSystemElements = await this.getExtraSystemElements()
    // console.log(this.extraSystemElements.map(el => el.type))
    const fabricData = await this.getFabrics()
    this.classicFabrics = fabricData.classic
    this.dayNightFabrics = fabricData.dayNight
  }

  save() {
    fs.writeFileSync(
      './metadata/system_groups.json',
      JSON.stringify(this.systemGroups, null, 2)
    )
    console.log('System groups: success');

    fs.writeFileSync(
      './metadata/systems.json',
      JSON.stringify(this.systems, null, 2)
    )
    console.log('Systems: success');

    fs.writeFileSync(
      './metadata/modification_groups.json',
      JSON.stringify(this.modificationGroups, null, 2)
    )
    console.log('Modification groups: success');

    fs.writeFileSync(
      './metadata/modifications.json',
      JSON.stringify(this.modifications, null, 2)
    )
    console.log('Modifications: success');

    fs.writeFileSync(
      './metadata/system_elements.json',
      JSON.stringify(this.systemElements, null, 2)
    )
    console.log('System elements: success');

    fs.writeFileSync(
      './metadata/extra_system_elements.json',
      JSON.stringify(this.extraSystemElements, null, 2)
    )
    console.log('Extra system elements: success');

    fs.writeFileSync('./metadata/fabrics.json', JSON.stringify([
      ...this.classicFabrics,
      ...this.dayNightFabrics
    ]))
    console.log('Fabrics: success');

    fs.writeFileSync('./metadata/data.json', JSON.stringify({
      SYSTEM_GROUP_LIST: this.systemGroups,
      SYSTEM_LIST: this.systems,
      SYSTEM_ELEMENT_LIST: this.systemElements,
      MODIFICATION_GROUP_LIST: this.modificationGroups,
      MODIFICATION_LIST: this.modifications,
      EXTRA_SYSTEM_ELEMENT_LIST: this.extraSystemElements,
      FABRIC_LIST: [
        ...this.classicFabrics,
        ...this.dayNightFabrics
      ],
    }, null, 2))
    console.log('Full data: success');

    fs.writeFileSync(
      './metadata/images.json',
      JSON.stringify(this.imageDict, null, 2)
    )
    console.log(`Images: ${Object.keys(this.imageDict).length}`);

    fs.writeFileSync(
      './metadata/images_extra.json',
      JSON.stringify(this.extraImageDict, null, 2)
    )
    console.log(`Extra images: ${Object.keys(this.extraImageDict).length}`);

    fs.writeFileSync(
      './metadata/images_error.json',
      JSON.stringify(this.errorImageDict, null, 2)
    )
    console.log(`Amount of failed images: ${Object.keys(this.errorImageDict).length}`);
  }


  // System groups
  generateSystemGroupId(systemGroupTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}`)
  }
  generateSystemGroupTitle(systemGroupTitle: string) {
    return `${systemGroupTitle}`
  }
  getSystemGroupById(id: string) {
    return this.systemGroups.find(el => el.id === id)
  }
  async getSystemGroups(): Promise<SystemGroup[]> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Группа систем',
      fromLetter: 'B',
      startNumber: 3,
      toLetter: 'C',
      lastRowNumber: 5,
    }))
    if (!data || !data.data.values) return []

    const systemGroups: SystemGroup[] = []

    for (const item of data.data.values) {
      systemGroups.push({
        id: this.generateSystemGroupId(item[0]),
        title: item[0],
        fabricCollectionType: item[0].toLocaleLowerCase().includes('день') ? 'day_night' : 'classic',
        image: await this.generateImageUrl(this.generateSystemGroupTitle(item[0]), item[1]) || ''
      })
    } 

    return systemGroups
  }


  // Systems
  generateSystemId(systemGroupTitle: string, systemTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}__${systemTitle}`)
  }
  generateSystemTitle(systemGroupTitle: string, systemTitle: string) {
    return `${systemGroupTitle}__${systemTitle}`
  }
  getSystemById(id: string) {
    return this.systems.find(el => el.id === id)
  }
  async getSystems(): Promise<System[]> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Система',
      fromLetter: 'B',
      startNumber: 4,
      toLetter: 'L',
      lastRowNumber: 19,
    }))
    if (!data || !data.data.values) return []

    const systems: Array<System | undefined> = []
    for (const item of data.data.values) {
      const systemGroup = this.getSystemGroupById(this.generateSystemGroupId(item[0]))
      if (!systemGroup) continue
      systems.push({
        id: this.generateSystemId(systemGroup.title, item[1]),
        title: item[1],
        image: await this.generateImageUrl(this.generateSystemTitle(systemGroup.title, item[1]), item[5]) || '',
        article: item[2],
        diameter: item[10],
        heightTo: item[9],
        systemGroup: systemGroup.id,
        widthFrom: item[7],
        widthTo: item[8],
        pdf: item[4]
      })
    }

    return systems.filter(el => el) as  System[]
  }

  // Modification groups
  generateModificationGroupId(systemGroupTitle: string, systemTitle: string, modificationGroupTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}__${systemTitle}__${modificationGroupTitle}`)
  }
  getModificationGroupById(id: string) {
    return this.modificationGroups.find(el => el.id === id)
  }

  async getModificationGroups(): Promise<Array<ModificationGroup>> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Модификаторы',
      fromLetter: 'B',
      startNumber: 5,
      toLetter: 'D',
      lastRowNumber: 99,
    }))
    if (!data || !data.data.values) return []

    const filterSet = new Set()
    const modificationGroups: Array<ModificationGroup | undefined> = data.data.values.map((item) => {
      const system = this.getSystemById(this.generateSystemId(item[0], item[1]))
      if (!system) return

      const id = this.generateModificationGroupId(item[0], item[1], item[2])
      if (filterSet.has(id)) return
      filterSet.add(id)
      return {
        id: id,
        title: item[2],
        system: system.id
      }
    })

    return modificationGroups.filter(el => el) as ModificationGroup[]
  }


  // Modifications
  generateModificationId(systemGroupTitle: string, systemTitle: string, modificationGroupTitle: string, modificationTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}__${systemTitle}__${modificationGroupTitle}__${modificationTitle}`)
  }
  generateModificationTitle(systemGroupTitle: string, systemTitle: string, modificationGroupTitle: string, modificationTitle: string) {
    return `${systemGroupTitle}__${systemTitle}__${modificationGroupTitle}__${modificationTitle}`
  }
  getModificationById(id: string) {
    return this.modifications.find(el => el.id === id)
  }

  async getModifications(): Promise<Array<Modification>> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Модификаторы',
      fromLetter: 'B',
      startNumber: 5,
      toLetter: 'BC',
      lastRowNumber: 101,
    }))
    if (!data || !data.data.values) return []

    const filterSet = new Set()
    let modifications: Array<Modification | undefined> = []
    for (const item of data.data.values) {
      const modificationGroup = this.getModificationGroupById(
        this.generateModificationGroupId(item[0], item[1], item[2])
      )
      if (!modificationGroup) continue

      const id = this.generateModificationId(item[0], item[1], item[2], item[3])
      if (filterSet.has(id)) continue
      filterSet.add(id)
      const modification: Modification = {
        id: id,
        title: item[3],
        fields: [],
        modificationGroup: this.generateModificationGroupId(item[0], item[1], item[2]),
        image: item[3]?.toLocaleLowerCase().includes('замер') ? await this.generateImageUrl(this.generateModificationTitle(item[0], item[1], item[2], item[3]), item[6]) : undefined,
        mainImage: ['левое', 'левые', 'слева', 'правое', 'правые', 'справа'].includes(item[3].toLocaleLowerCase()) ? await this.generateImageUrl(this.generateModificationTitle(item[0], item[1], item[2], item[3]), item[6]) : undefined,
      }
      if (['левое', 'левые', 'слева'].includes(item[3].toLocaleLowerCase())) modification.direction = 'left'
      if (['правое', 'правые', 'справа'].includes(item[3].toLocaleLowerCase())) modification.direction = 'right'

      modifications.push(modification)
    }

    modifications = modifications.filter(el => el) 
    data.data.values.forEach(item => {
      if (!item[32]) return
      const modification = modifications.find(el => el?.id === this.generateModificationId(item[0], item[1], item[2], item[3]))
      if (!modification) return
      modification.fields.push({
        label: item[32],
        placeholder: item[32].split(', ')[1]
      })
    })

    return modifications as Modification[]
  }

  // System elements
  generateSystemElementId(systemGroupTitle: string, systemTitle: string, systemElementTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}__${systemTitle}__${systemElementTitle}`)
  }
  generateSystemElementTitle(systemGroupTitle: string, systemTitle: string, systemElementTitle: string) {
    return `${systemGroupTitle}__${systemTitle}__${systemElementTitle}`
  }
  getSystemElementById(id: string) {
    return this.systemElements.find(el => el.id === id)
  }

  async getSystemElements(): Promise<SystemElement[]> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Модификаторы',
      fromLetter: 'B',
      startNumber: 102,
      toLetter: 'AF',
      lastRowNumber: 301,
    }))
    if (!data || !data.data.values) return []

    const filterSet = new Set()
    let systemElements: Array<SystemElement | undefined> = data.data.values.map((item, itemIndex) => {
      const system = this.getSystemById(
        this.generateSystemId(item[0], item[1])
      )
      if (!system) return

      const id = this.generateSystemElementId(item[0], item[1], item[2])
      if (filterSet.has(id)) return
      filterSet.add(id)
      const systemElement: SystemElement = {
        id: id,
        title: item[2],
        colorList: [],
        system: this.generateSystemId(item[0], item[1]),
        isMain: item[2]?.includes('механизм'),
      }

      return systemElement
    })


    systemElements = systemElements.filter(el => el)
    for (const item of data.data.values) {
      if (!item[18]) continue
      const systemElement = systemElements.find(el => el?.id === this.generateSystemElementId(item[0], item[1], item[2]))
      if (!systemElement) continue
      const systemElementTitle = `${this.generateSystemElementTitle(item[0], item[1], item[2])}__${item[18]}`
      // if (!item[18] || !item[19] || !item[4] || !item[6]) return
      const newSystemElementColor: any = {
        title: item[18],
        image: await this.generateImageUrl(`${systemElementTitle}`, item[19]),
        isPlastic: item[20].toLowerCase().includes('пластик'),
        isMetallic: item[20].toLowerCase().includes('металлич'),
        leftMainImage: await this.generateImageUrl(`${systemElementTitle}__left`, item[4]),
        rightMainImage: await this.generateImageUrl(`${systemElementTitle}__right`, item[6]),
      }
      if (item[30]) {
        newSystemElementColor.layer = item[30]
      }

      systemElement.colorList.push(newSystemElementColor)
    }

    return systemElements as SystemElement[]
  }


  // Extra system elements
  generateExtraSystemElementId(systemGroupTitle: string, systemTitle: string, systemElementTitle: string, extraSystemElementTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}__${systemTitle}__${systemElementTitle}__${extraSystemElementTitle}`)
  }
  generateExtraSystemElementTitle(systemGroupTitle: string, systemTitle: string, systemElementTitle: string, extraSystemElementTitle: string) {
    return `${systemGroupTitle}__${systemTitle}__${systemElementTitle}__${extraSystemElementTitle}`
  }
  getExtraSystemElementById(id: string) {
    return this.extraSystemElements.find(el => el.id === id)
  }

  async getExtraSystemElements(): Promise<ExtraSystemElement[]> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Модификаторы',
      fromLetter: 'B',
      startNumber: 308,
      toLetter: 'BC',
      lastRowNumber: 500,
    }))
    if (!data || !data.data.values) return []

    const filterSet = new Set()
    let extraSystemElements: Array<ExtraSystemElement | undefined> = []
    for (const item of data.data.values) {
      const system = this.getSystemById(
        this.generateSystemId(item[0], item[1])
      )
      if (!system) continue

      const id = this.generateExtraSystemElementId(item[0], item[1], item[2], item[3])
      if (filterSet.has(id)) continue
      filterSet.add(id)
      const extraSystemElement: ExtraSystemElement = {
        id: id,
        title: item[3],
        colorList: [],
        image: await this.generateImageUrl(this.generateExtraSystemElementTitle(item[0], item[1], item[2], item[3]), item[6]) || '',
        system: system.id,
        type: item[2].toLowerCase().includes('утяжелитель') ? 'weighting' : 'fixation'
      }

      extraSystemElements.push(extraSystemElement)
    }


    extraSystemElements = extraSystemElements.filter(el => el)
    for (const item of data.data.values) {
      if (!item[18]) continue
      const extraSystemElement = extraSystemElements.find(el => el?.id === this.generateExtraSystemElementId(item[0], item[1], item[2], item[3]))
      if (!extraSystemElement) continue
      const extraSystemElementColorTitle = `${this.generateExtraSystemElementTitle(item[0], item[1], item[2], item[3])}__${item[18]}`
      const newExtraSystemElementColor: any = {
        title: item[18],
        image: await this.generateImageUrl(extraSystemElementColorTitle, item[19]) || '',
        mainImage: await this.generateImageUrl(`${extraSystemElementColorTitle}__main`, item[4])
      }
      if (item[30]) {
        newExtraSystemElementColor.layer = item[30]
      }
      extraSystemElement.colorList.push(newExtraSystemElementColor)
    }


    return extraSystemElements as ExtraSystemElement[]
  }

  generateFabricId(systemTitle: string, fabricTitle: string) {
    return this.generateBase64Id(`${systemTitle}__${fabricTitle}`)
  }
  generateFabricTitle(systemTitle: string, fabricTitle: string) {
    return `${systemTitle}__${fabricTitle}`
  }
  getFabricById(id: string) {
    return this.systemGroups.find(el => el.id === id)
  }
  async getFabrics(): Promise<{
    classic: Fabric[],
    dayNight: Fabric[]
  }> {
    const classicFabricData = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Ткани классика',
      fromLetter: 'B',
      startNumber: 4,
      toLetter: 'S',
      lastRowNumber: 412,
    }))
    if (!classicFabricData?.data?.values) return {
      classic: [],
      dayNight: []
    }

    // console.log(classicFabricData.data.values.slice(0, 20))

    let classicFabrics: Fabric[] = []
    for (const systemGroup of this.systemGroups) {
      if (systemGroup && systemGroup.fabricCollectionType === 'classic') {
        for (const item of classicFabricData.data.values) {
          classicFabrics.push({
            id: this.generateFabricId(systemGroup.title, item[2]),
            article: item[1],
            heightFrom: 0,
            heightTo: 0,
            innerID: item[0],
            title: item[2],
            mainImage: await this.generateImageUrl(`${this.generateFabricTitle(systemGroup.title, item[2])}__${item[2]}__main`, item[9]) || '',
            systemGroup: systemGroup.id,
            widthFrom: 0,
            widthTo: +item[6] || 0,
            fabricGroupType: 'classic',
            image: await this.generateImageUrl(`${this.generateFabricTitle(systemGroup.title, item[2])}__${item[2]}`, item[7]) || ''
          })
        }
      }
    }

    const dayNightFabricData = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Ткани день/ночь',
      fromLetter: 'B',
      startNumber: 4,
      toLetter: 'S',
      lastRowNumber: 412,
    }))
    if (!dayNightFabricData || !dayNightFabricData.data.values) return {
      classic: [],
      dayNight: []
    }

    let dayNightFabrics: Fabric[] = []
    for (const systemGroup of this.systemGroups) {
      if (systemGroup && systemGroup.fabricCollectionType === 'day_night') {
        for (const item of dayNightFabricData.data.values) {
          dayNightFabrics.push({
            id: this.generateFabricId(systemGroup.title, item[2]),
            article: item[1],
            heightFrom: 0,
            heightTo: 0,
            innerID: item[0],
            title: item[2],
            mainImage: await this.generateImageUrl(`${this.generateFabricTitle(systemGroup.title, item[2])}__main`, item[8]) || '',
            systemGroup: systemGroup.id,
            widthFrom: 0,
            widthTo: +item[5] || 0,
            fabricGroupType: 'day_night',
            image: await this.generateImageUrl(`${this.generateFabricTitle(systemGroup.title, item[2])}`, item[6]) || ''
          })
        }
      }
    }

    return {
      classic: classicFabrics,
      dayNight: dayNightFabrics
    }
  }
}

export default GoogleSpreadSheets;