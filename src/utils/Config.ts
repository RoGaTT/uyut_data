import { MODIFICATION_GROUP_LIST, MODIFICATION_LIST, SYSTEM_GROUP_LIST, SYSTEM_LIST } from "../data";
import { ID, Modification, System } from "../types";
import { ModificationGroupView, SystemGroupView } from "../views";

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

  static getSystemGroupList(): SystemGroupView[] {
    const systemGroupList = SYSTEM_GROUP_LIST.map(systemGroup => this.getSystemGroupView(systemGroup.id))
    return systemGroupList.filter(el => el) as SystemGroupView[]
  }

  /**
   *  Группа модификаторов
   */
  static getModificationGroupView(modificationGroupId: ID): ModificationGroupView | undefined {
    const modificationGroup = MODIFICATION_GROUP_LIST.find(modificationGroup => modificationGroup.system === modificationGroupId)
    if (!modificationGroup) return

    const modificationList: Modification[] = MODIFICATION_LIST.filter(modification => modification.modificationGroup === modificationGroup.id)

    return {
      ...modificationGroup,
      items: modificationList
    }
  }

  static getModificationGroupList(system: ID): ModificationGroupView[] {
    const modificationGroupList = MODIFICATION_GROUP_LIST.filter(modificationGroup => modificationGroup.system === system)
    const modificationGroupViewList = modificationGroupList.map(modificationGroup => this.getModificationGroupView(modificationGroup.id))

    return modificationGroupViewList.filter(el => el) as ModificationGroupView[]
  }
}

export default ConfigController