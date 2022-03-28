import GoogleSpreadSheets from "./utils/GoogleSpreedSheets";


const bootstrap = async () => {
  const googleSpreadSheets = new GoogleSpreadSheets()
  await googleSpreadSheets.init();
  googleSpreadSheets.systemGroups = await googleSpreadSheets.getSystemGroups();
  // console.log(googleSpreadSheets.systemGroups)
  googleSpreadSheets.systems = await googleSpreadSheets.getSystems()
  // console.log(googleSpreadSheets.systems)
  googleSpreadSheets.modificationGroups = await googleSpreadSheets.getModificationGroups()
  // console.log(googleSpreadSheets.modificationGroups)
  googleSpreadSheets.modifications = await googleSpreadSheets.getModifications()
  // console.log(googleSpreadSheets.modificationGroups)
  googleSpreadSheets.systemElements = await googleSpreadSheets.getSystemElements()
  console.log(googleSpreadSheets.systemElements.map(el => el.colorList))
  googleSpreadSheets.extraSystemElements = await googleSpreadSheets.getExtraSystemElements()
  console.log(googleSpreadSheets.extraSystemElements.map(el => el.type))
}

bootstrap()