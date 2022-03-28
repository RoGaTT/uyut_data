import GoogleSpreadSheets from "./utils/GoogleSpreedSheets";

import colors from 'colors'
import ConfigController from "./utils/Config";


const bootstrap = async () => {
  const googleSpreadSheets = new GoogleSpreadSheets()
  await googleSpreadSheets.init();
  googleSpreadSheets.save()

  // console.log(googleSpreadSheets.modifications.map(el => el.image))

  ConfigController.getSystemGroupById('dsa')

}

bootstrap()