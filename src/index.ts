import ConfigController from "./utils/Config";

const systemGroupViewList = ConfigController.getSystemGroupViewList()
console.log(systemGroupViewList[0].items[0]);

const modificationGroupViewList = ConfigController.getSystemGroupViewList()
console.log(modificationGroupViewList[0].items);