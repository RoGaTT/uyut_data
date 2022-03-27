import ConfigController from "./utils/Config";

const systemGroupViewList = ConfigController.getSystemGroupViewList()
console.log(systemGroupViewList[0].items[0]);

const modificationGroupViewList = ConfigController.getModificationGroupViewList(systemGroupViewList[0].items[0].id)
console.log(modificationGroupViewList);

const systemElementViewList = ConfigController.getSystemElementViewList(systemGroupViewList[0].items[0].id)
console.log(systemElementViewList[0].colorList);