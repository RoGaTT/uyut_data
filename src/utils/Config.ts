import { MODIFICATION_LIST } from "../data/modification";
import { MODIFICATION_GROUP_LIST } from "../data/modification_group";
import { SYSTEM_LIST } from "../data/system";
import { SYSTEM_ELEMENT_COLOR_LIST, SYSTEM_ELEMENT_LIST } from "../data/system_element";
import { SYSTEM_GROUP_LIST } from "../data/system_group";
import { ID, Modification, System, SystemElement, SystemElementColor } from "../types";
import { ModificationGroupView, SystemElementColorView, SystemElementView, SystemGroupView } from "../views";

class ConfigController {
  /**
   *  Группа систем
   */
  static getSystemGroupView(id: ID): SystemGroupView | undefined {
    const systemGroup = SYSTEM_GROUP_LIST.find(systemGroup => systemGroup.id === id)
    if (!systemGroup) return
    const systemList: System[] = SYSTEM_LIST.filter(system => system.systemGroup === id)
    return {
      ...systemGroup,
      items: systemList
    }
  }

  static getSystemGroupViewList(): SystemGroupView[] {
    const systemGroupList = SYSTEM_GROUP_LIST.map(systemGroup => this.getSystemGroupView(systemGroup.id))
    return systemGroupList.filter(el => el) as SystemGroupView[]
  }

  /**
   *  Группа модификаторов
   */
  static getModificationGroupView(modificationGroupId: ID): ModificationGroupView | undefined {
    const modificationGroup = MODIFICATION_GROUP_LIST.find(modificationGroup => modificationGroup.id === modificationGroupId)
    if (!modificationGroup) return

    const modificationList: Modification[] = MODIFICATION_LIST.filter(modification => modification.modificationGroup === modificationGroup.id)
    return {
      ...modificationGroup,
      items: modificationList
    }
  }

  static getModificationGroupViewList(system: ID): ModificationGroupView[] {
    const modificationGroupList = MODIFICATION_GROUP_LIST.filter(modificationGroup => modificationGroup.system === system)
    const modificationGroupViewList = modificationGroupList.map(modificationGroup => this.getModificationGroupView(modificationGroup.id))

    return modificationGroupViewList.filter(el => el) as ModificationGroupView[]
  }


  /**
   *  Элементы системы
   */
  static getSystemElementViewList(system: ID): SystemElementView[] {
    const systemElementList = SYSTEM_ELEMENT_LIST.filter(systemElement => systemElement.system === system)
    const systemElementViewList = systemElementList.map(systemElement => this.getSystemElementView(systemElement.id))
    return systemElementViewList.filter(el => el) as SystemElementView[]
  }


  static getSystemElementView(systemElementId: ID): SystemElementView | undefined {
    const systemElement = SYSTEM_ELEMENT_LIST.find(systemElement => systemElement.id === systemElementId)
    if (!systemElement) return
    const systemElementColorList = systemElement.colorList.map(el => ({
      mainImage: el.mainImage,
      data: this.getSystemElementColor(el.id)
    })) 
    const data: SystemElementView = {
      ...systemElement,
      colorList: systemElementColorList.filter(el => el.data) as SystemElementColorView[]
    }
    return data
  }

  static getSystemElementColor(systemElementColorId: ID): SystemElementColor | undefined {
    const systemElementColor = SYSTEM_ELEMENT_COLOR_LIST.find(systemElementColor => systemElementColor.id === systemElementColorId)
    return systemElementColor    
  }
}

export default ConfigController