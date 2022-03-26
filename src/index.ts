import ConfigController from "./utils/Config";

const systemGroupList = ConfigController.getSystemGroupList()
console.log(systemGroupList[0].items[0]);