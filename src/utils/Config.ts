import fetchedData from '../../metadata/data.json'
import { ExtraSystemElement, Fabric, Modification, ModificationGroup, System, SystemElement, SystemGroup } from '../types'
import { SystemGroupView, ModificationGroupView, SystemView } from '../views'

type FetchedData = {
  SYSTEM_GROUP_LIST: SystemGroup[],
  SYSTEM_LIST: System[],
  SYSTEM_ELEMENT_LIST: SystemElement[],
  MODIFICATION_GROUP_LIST: ModificationGroup[],
  MODIFICATION_LIST: Modification[],
  EXTRA_SYSTEM_ELEMENT_LIST: ExtraSystemElement[],
  FABRIC_LIST: Fabric[],
}

const data: FetchedData = fetchedData as unknown as  FetchedData 

class ConfigController {
  static getSystemGroupById(id: string) {
    return data.SYSTEM_GROUP_LIST.find(el => el.id === id)
  }
  static getSystemGroupByIdList(idList: string[]) {
    return idList.map(id => this.getSystemGroupById(id)).filter(el => el) as SystemGroup[]
  }
  static getSystemById(id: string) {
    return data.SYSTEM_LIST.find(el => el.id === id)
  }
  static getSystemByIdList(idList: string[]) {
    return idList.map(id => this.getSystemById(id)).filter(el => el) as System[]
  }
  static getSystemElementById(id: string) {
    return data.SYSTEM_ELEMENT_LIST.find(el => el.id === id)
  }
  static getSystemElementByIdList(idList: string[]) {
    return idList.map(id => this.getSystemElementById(id)).filter(el => el) as SystemElement[]
  }
  static getExtraSystemListById(id: string) {
    return data.EXTRA_SYSTEM_ELEMENT_LIST.find(el => el.id === id)
  }
  static getExtraSystemListByIdList(idList: string[]) {
    return idList.map(id => this.getExtraSystemListById(id)).filter(el => el) as ExtraSystemElement[]
  }
  static getModificationGroupById(id: string) {
    return data.MODIFICATION_GROUP_LIST.find(el => el.id === id)
  }
  static getModificationGroupByIdList(idList: string[]) {
    return idList.map(id => this.getModificationGroupById(id)).filter(el => el) as ModificationGroup[]
  }
  static getModificationById(id: string) {
    return data.MODIFICATION_LIST.find(el => el.id === id)
  }
  static getModificationByIdList(idList: string[]) {
    return idList.map(id => this.getModificationById(id)).filter(el => el) as Modification[]
  }
  static getFabricById(id: string) {
    return data.FABRIC_LIST.find(el => el.id === id)
  }
  static getFabricByIdList(idList: string[]) {
    return idList.map(id => this.getFabricById(id)).filter(el => el) as Fabric[]
  }

  static getSystemGroupViewById(id: string): SystemGroupView | undefined {
    const item = this.getSystemGroupById(id)
    if (!item) return undefined

    return {
      ...item,
      items: data.SYSTEM_LIST.filter(el => el.systemGroup === id).map(el => this.getSystemViewById(el.id)) as SystemView[]
    }
  }
  static getSystemGroupViewList(): SystemGroupView[] {
    const buffer = data.SYSTEM_GROUP_LIST.map(el => this.getSystemGroupViewById(el.id))
    return buffer.filter(el => el) as SystemGroupView[]
  }

  static getSystemViewById(id: string): SystemView | undefined {
    const item = this.getSystemById(id)
    if (!item) return undefined

    return {
      ...item,
      extraSystemElements: data.EXTRA_SYSTEM_ELEMENT_LIST.filter(el => el.system === item.id),
      systemElements: data.SYSTEM_ELEMENT_LIST.filter(el => el.system === item.id),
      fabrics: data.FABRIC_LIST.filter(el => el.systemGroup === item.systemGroup)
    }
  }

  static getSystemElementViewList(systemId: string): SystemElement[] {
    const buffer = data.SYSTEM_ELEMENT_LIST.filter(el => el.system === systemId)
    return buffer
  }
  static getSystemElementViewById(id: string): SystemElement | undefined {
    const item = this.getSystemElementById(id)
    if (!item) return undefined
    return item
  }

  // static getSystemElementViewById(id: string): SystemElementView | undefined {
  //   return 
  // }
  // static getExtraSystemListViewById(id: string): ExtraSystemElementView | undefined {
  //   return 
  // }
  // static getModificationGroupViewById(id: string): ModificationGroupView | undefined {
  //   return 
  // }
  // static getModificationViewById(id: string): ModificationView | undefined {
  //   return 
  // }
  // static getFabricViewById(id: string): FabricView | undefined {
  //   return 
  // }
}

export default ConfigController