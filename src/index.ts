import GoogleSpreadSheets from "./utils/GoogleSpreedSheets";
import fs from 'fs'
import colors from 'colors'


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
  // console.log(googleSpreadSheets.systemElements.map(el => el.colorList))
  googleSpreadSheets.extraSystemElements = await googleSpreadSheets.getExtraSystemElements()
  // console.log(googleSpreadSheets.extraSystemElements.map(el => el.type))
  const fabricData = await googleSpreadSheets.getFabrics()
  googleSpreadSheets.classicFabrics = fabricData.classic
  googleSpreadSheets.dayNightFabrics = fabricData.dayNight

  fs.writeFileSync(
    './metadata/system_groups.json',
    JSON.stringify(googleSpreadSheets.systemGroups, null, 2)
  )
  console.log('System groups: success');

  fs.writeFileSync(
    './metadata/systems.json',
    JSON.stringify(googleSpreadSheets.systems, null, 2)
  )
  console.log('Systems: success');

  fs.writeFileSync(
    './metadata/modification_groups.json',
    JSON.stringify(googleSpreadSheets.modificationGroups, null, 2)
  )
  console.log('Modification groups: success');

  fs.writeFileSync(
    './metadata/modifications.json',
    JSON.stringify(googleSpreadSheets.modifications, null, 2)
  )
  console.log('Modifications: success');

  fs.writeFileSync(
    './metadata/system_elements.json',
    JSON.stringify(googleSpreadSheets.systemElements, null, 2)
  )
  console.log('System elements: success');

  fs.writeFileSync(
    './metadata/extra_system_elements.json',
    JSON.stringify(googleSpreadSheets.extraSystemElements, null, 2)
  )
  console.log('Extra system elements: success');

  fs.writeFileSync('./metadata/fabrics.json', JSON.stringify([
    ...googleSpreadSheets.classicFabrics,
    ...googleSpreadSheets.dayNightFabrics
  ]))
  console.log('Fabrics: success');

  fs.writeFileSync('./metadata/data.json', JSON.stringify({
    SYSTEM_GROUP_LIST: googleSpreadSheets.systemGroups,
    SYSTEM_LIST: googleSpreadSheets.systems,
    SYSTEM_ELEMENT_LIST: googleSpreadSheets.systemElements,
    MODIFICATION_GROUP_LIST: googleSpreadSheets.modificationGroups,
    MODIFICATION_LIST: googleSpreadSheets.modifications,
    EXTRA_SYSTEM_ELEMENTS: googleSpreadSheets.extraSystemElements,
    FABRIC_LIST: [
      ...googleSpreadSheets.classicFabrics,
      ...googleSpreadSheets.dayNightFabrics
    ],

  }, null, 2))
  console.log('Full data: success');
}

bootstrap()