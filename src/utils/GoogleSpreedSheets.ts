import { google, sheets_v4 } from "googleapis";
import { Compute, GoogleAuth, JWT, UserRefreshClient } from "googleapis-common";
import { ExtraSystemElement, Fabric, Modification, ModificationGroup, System, SystemElement, SystemElementColor, SystemGroup } from "../types";
import base64 from 'base-64'
import utf8 from 'utf8'
import fs from 'fs'

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

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: "keys.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
  }


  private generateImageUrl(url: string) {
    if (!url?.includes('disk')) return url
    return `https://getfile.dokpub.com/yandex/get/${url}`
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
  }


  // System groups
  generateSystemGroupId(systemGroupTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}`)
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

    const systemGroups: SystemGroup[] = data.data.values.map((item) => ({
      id: this.generateSystemGroupId(item[0]),
      title: item[0],
      fabricCollectionType: item[0].toLocaleLowerCase().includes('день') ? 'day_night' : 'classic',
      image: `https://getfile.dokpub.com/yandex/get/${item[1]}`
    }))

    return systemGroups
  }


  // Systems
  generateSystemId(systemGroupTitle: string, systemTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}.${systemTitle}`)
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

    const systems: Array<System | undefined> = data.data.values.map((item) => {
      const systemGroup = this.getSystemGroupById(this.generateSystemGroupId(item[0]))
      if (!systemGroup) return
      return {
        id: this.generateSystemId(systemGroup.title, item[1]),
        title: item[1],
        image: `https://getfile.dokpub.com/yandex/get/${item[5]}`,
        article: item[2],
        diameter: item[10],
        heightTo: item[9],
        systemGroup: systemGroup.id,
        widthFrom: item[7],
        widthTo: item[8],
        pdf: item[4]
      }
    })

    return systems.filter(el => el) as  System[]
  }

  // Modification groups
  generateModificationGroupId(systemGroupTitle: string, systemTitle: string, modificationGroupTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}.${systemTitle}.${modificationGroupTitle}`)
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
    return this.generateBase64Id(`${systemGroupTitle}.${systemTitle}.${modificationGroupTitle}.${modificationTitle}`)
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
      lastRowNumber: 99,
    }))
    if (!data || !data.data.values) return []

    const filterSet = new Set()
    let modifications: Array<Modification | undefined> = data.data.values.map((item, itemIndex) => {
      const modificationGroup = this.getModificationGroupById(
        this.generateModificationGroupId(item[0], item[1], item[2])
      )
      if (!modificationGroup) return

      const id = this.generateModificationId(item[0], item[1], item[2], item[3])
      if (filterSet.has(id)) return
      filterSet.add(id)
      const modification: Modification = {
        id: id,
        title: item[3],
        fields: [],
        modificationGroup: this.generateModificationGroupId(item[0], item[1], item[2]),
        image: item[3]?.toLocaleLowerCase().includes('замер') ? `https://getfile.dokpub.com/yandex/get/${item[6]}` : undefined,
        mainImage: ['левое', 'левые', 'слева', 'правое', 'правые', 'справа'].includes(item[3].toLocaleLowerCase()) ? `https://getfile.dokpub.com/yandex/get/${item[6]}` : undefined,
      }
      if (['левое', 'левые', 'слева'].includes(item[3].toLocaleLowerCase())) modification.direction = 'left'
      if (['правое', 'правые', 'справа'].includes(item[3].toLocaleLowerCase())) modification.direction = 'right'

      return modification
    })

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
    return this.generateBase64Id(`${systemGroupTitle}.${systemTitle}.${systemElementTitle}`)
  }
  getSystemElementById(id: string) {
    return this.systemElements.find(el => el.id === id)
  }

  async getSystemElements(): Promise<SystemElement[]> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Модификаторы',
      fromLetter: 'B',
      startNumber: 100,
      toLetter: 'BC',
      lastRowNumber: 299,
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
    data.data.values.forEach(item => {
      if (!item[18]) return
      const systemElement = systemElements.find(el => el?.id === this.generateSystemElementId(item[0], item[1], item[2]))
      if (!systemElement) return
      systemElement.colorList.push({
        title: item[18],
        image: item[19],
        isPlastic: item[20].toLowerCase().includes('пластик'),
        isMetallic: item[20].toLowerCase().includes('металлич'),
        leftMainImage: this.generateImageUrl(item[4]),
        rightMainImage: this.generateImageUrl(item[6])
      })
    })

    return systemElements as SystemElement[]
  }


  // Extra system elements
  generateExtraSystemElementId(systemGroupTitle: string, systemTitle: string, systemElementTitle: string, extraSystemElementTitle: string) {
    return this.generateBase64Id(`${systemGroupTitle}.${systemTitle}.${systemElementTitle}.${extraSystemElementTitle}`)
  }
  getExtraSystemElementById(id: string) {
    return this.extraSystemElements.find(el => el.id === id)
  }

  async getExtraSystemElements(): Promise<ExtraSystemElement[]> {
    const data = await this.googleSheetsInstance?.spreadsheets.values.get(this.getAuthObject({
      sheetName: 'Модификаторы',
      fromLetter: 'B',
      startNumber: 306,
      toLetter: 'BC',
      lastRowNumber: 485,
    }))
    if (!data || !data.data.values) return []

    const filterSet = new Set()
    let extraSystemElements: Array<ExtraSystemElement | undefined> = data.data.values.map((item, itemIndex) => {
      const system = this.getSystemById(
        this.generateSystemId(item[0], item[1])
      )
      if (!system) return

      const id = this.generateExtraSystemElementId(item[0], item[1], item[2], item[3])
      if (filterSet.has(id)) return
      filterSet.add(id)
      const extraSystemElement: ExtraSystemElement = {
        id: id,
        title: item[3],
        colorList: [],
        image: this.generateImageUrl(item[6]),
        type: item[2].toLowerCase().includes('утяжелитель') ? 'weighting' : 'fixation'
      }

      return extraSystemElement
    })


    extraSystemElements = extraSystemElements.filter(el => el)
    data.data.values.forEach(item => {
      if (!item[18]) return
      const extraSystemElement = extraSystemElements.find(el => el?.id === this.generateExtraSystemElementId(item[0], item[1], item[2], item[3]))
      if (!extraSystemElement) return
      extraSystemElement.colorList.push({
        title: item[18],
        image: this.generateImageUrl(item[19]),
        mainImage: this.generateImageUrl(item[4])
      })
    })

    return extraSystemElements as ExtraSystemElement[]
  }

  generateFabricId(systemTitle: string) {
    return this.generateBase64Id(`${systemTitle}`)
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
    if (!classicFabricData || !classicFabricData.data.values) return {
      classic: [],
      dayNight: []
    }

    // console.log(classicFabricData.data.values.slice(0, 20))

    let classicFabrics: Fabric[] = []
    for (let i = 0; i < this.systemGroups.length; i++) {
      const systemGroup = this.systemGroups[i]
      if (systemGroup.fabricCollectionType === 'classic') {
        classicFabrics = classicFabricData.data.values.map((item) => ({
          id: this.generateFabricId(item[2]),
          article: item[1],
          heightFrom: 0,
          heightTo: 0,
          innerID: item[0],
          title: item[2],
          mainImage: this.generateImageUrl(item[9]),
          systemGroup: systemGroup.id,
          widthFrom: 0,
          widthTo: +item[6] || 0,
          fabricGroupType: 'classic',
          image: this.generateImageUrl(item[7])
        }))
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
    for (let i = 0; i < this.systemGroups.length; i++) {
      const systemGroup = this.systemGroups[i]
      if (systemGroup.fabricCollectionType === 'day_night') {
        dayNightFabrics = dayNightFabricData.data.values.map((item) => ({
          id: this.generateFabricId(item[2]),
          article: item[1],
          heightFrom: 0,
          heightTo: 0,
          innerID: item[0],
          title: item[2],
          mainImage: this.generateImageUrl(item[8]),
          systemGroup: systemGroup.id,
          widthFrom: 0,
          widthTo: +item[5] || 0,
          fabricGroupType: 'day_night',
          image: this.generateImageUrl(item[6])
        }))
      }
    }

    return {
      classic: classicFabrics,
      dayNight: dayNightFabrics
    }
  }
}

export default GoogleSpreadSheets;