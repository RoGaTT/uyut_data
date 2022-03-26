import { Modification, ModificationGroup, System, SystemElement, SystemElementColor, SystemGroup } from "./types";

export const SYSTEM_GROUP_LIST: SystemGroup[] = [
  {
    id: "a0600b41-6aba-40ea-8c48-7ed11c83b9de",
    title: 'Управление цепочное',
    // @TODO Добавить картинки
    image: ''
  },
  {
    id: "165e1223-5dd1-480d-981a-5494d3e4693c",
    title: 'Управление пружинное',
    // @TODO Добавить картинки
    image: ''
  },
  {
    id: "9a12ba01-e4ab-4f49-a63e-3974bbe83692",
    title: 'Управление День/Ночь',
    // @TODO Добавить картинки
    image: ''
  },
]

export const SYSTEM_LIST: System[] = [
  {
    id: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Мини',
    image: 'https://disk.yandex.ru/i/x72GnediKGbMxg',
    mainImage: '',
    widthFrom: 20,
    widthTo: 150,
    heightFrom: 20,
    heightTo: 200,
    diameter: 18,
    article: '62.00.2800',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '9cb43b35-5fd9-4b0d-82c2-6f52c9ce5138',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Миникассета',
    image: 'https://disk.yandex.ru/i/BjqHnwXL5rT4aQ',
    mainImage: '',
    widthFrom: 30,
    widthTo: 150,
    heightFrom: 20,
    heightTo: 200,
    diameter: 25,
    article: '62.00.9979',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: 'f8840877-437f-47db-bbe4-b38088b3844a',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Стандарт',
    image: 'https://disk.yandex.ru/i/B_my_fopxaQGBQ',
    mainImage: '',
    widthFrom: 25,
    widthTo: 200,
    heightFrom: 20,
    heightTo: 250,
    diameter: 25,
    article: '62.00.2200',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '5c5b4aba-7884-4069-a8c1-10409729018c',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Люкс',
    image: 'https://disk.yandex.ru/i/FDjEIMfKogtzUg',
    mainImage: '',
    widthFrom: 25,
    widthTo: 250,
    heightFrom: 20,
    heightTo: 350,
    diameter: 34,
    article: '62.00.2000',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '416833df-7a8d-41fa-b524-17b83197fb6c',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Люкс кассетный',
    image: 'https://disk.yandex.ru/i/HnROcA7fymxJ5A',
    mainImage: '',
    widthFrom: 25,
    widthTo: 200,
    heightFrom: 20,
    heightTo: 250,
    diameter: 25,
    article: '62.00.2400',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '3478a796-2d8f-410a-815f-2a0937c96ac7',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Люкс 2 кассетный',
    image: 'https://disk.yandex.ru/i/vtAtPs3pkROgeQ',
    mainImage: '',
    widthFrom: 25,
    widthTo: 200,
    heightFrom: 20,
    heightTo: 250,
    diameter: 31,
    article: '62.00.Л2000',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '66cabd96-7b4e-4246-8976-ce464e6b8288',
    systemGroup: 'a0600b41-6aba-40ea-8c48-7ed11c83b9de',
    title: 'Люкс 50',
    image: 'https://disk.yandex.ru/i/_Wv432jFHQojgw',
    mainImage: '',
    widthFrom: 25,
    widthTo: 300,
    heightFrom: 20,
    heightTo: 500,
    diameter: 50,
    article: '62.00.2800',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  // Управление пружинное (идёт дальше)
  {
    id: '24eb21c9-6a0f-47b1-9877-6f8389b8a3d0',
    systemGroup: '165e1223-5dd1-480d-981a-5494d3e4693c',
    title: 'Рама плюс',
    image: 'https://disk.yandex.ru/i/1J-nFFnZja8Drg',
    mainImage: '',
    widthFrom: 40,
    widthTo: 140,
    heightFrom: 20,
    heightTo: 180,
    diameter: 25,
    article: '62.00.9300',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: 'b39e51c0-1f91-467a-8408-d121c5547f8e',
    systemGroup: '165e1223-5dd1-480d-981a-5494d3e4693c',
    title: 'Стандарт пружинный',
    image: 'https://disk.yandex.ru/i/NFZDKoA_91Jzog',
    mainImage: '',
    widthFrom: 45,
    widthTo: 150,
    heightFrom: 20,
    heightTo: 180,
    diameter: 25,
    article: '62.00.2600',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '1032a34b-521c-49f2-b906-add8c034f6da',
    systemGroup: '165e1223-5dd1-480d-981a-5494d3e4693c',
    title: 'Люкс пружинный',
    image: 'https://disk.yandex.ru/i/S5YMba_TmsdiIQ',
    mainImage: '',
    widthFrom: 60,
    widthTo: 260,
    heightFrom: 20,
    heightTo: 350,
    diameter: 34,
    article: '62.00.2100',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '985fe119-eee3-4491-ba36-6596d730c9bd',
    systemGroup: '165e1223-5dd1-480d-981a-5494d3e4693c',
    title: 'Люкс кассетный пружинный',
    image: 'https://disk.yandex.ru/i/FXBeFMbvINRB8w',
    mainImage: '',
    widthFrom: 60,
    widthTo: 260,
    heightFrom: 20,
    heightTo: 250,
    diameter: 34,
    article: '62.00.2500',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  // Управление День/Ночь (идёт дальше)
  {
    id: '25785aea-7d8d-4b04-87c9-3e8f05b0e30d',
    systemGroup: '9a12ba01-e4ab-4f49-a63e-3974bbe83692',
    title: 'Мини',
    image: 'https://disk.yandex.ru/i/x72GnediKGbMxg',
    mainImage: '',
    widthFrom: 20,
    widthTo: 150,
    heightFrom: 20,
    heightTo: 200,
    diameter: 18,
    article: '62.00.9599',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '2fccbfdf-fb3e-47d2-8f44-1db31f061026',
    systemGroup: '9a12ba01-e4ab-4f49-a63e-3974bbe83692',
    title: 'Миникассета',
    image: 'https://disk.yandex.ru/i/BjqHnwXL5rT4aQ',
    mainImage: '',
    widthFrom: 30,
    widthTo: 150,
    heightFrom: 20,
    heightTo: 200,
    diameter: 25,
    article: '62.00.9979ДН',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '1fc10d8e-38ad-46f0-b9fd-81dfa08e0549',
    systemGroup: '9a12ba01-e4ab-4f49-a63e-3974bbe83692',
    title: 'Люкс',
    image: 'https://disk.yandex.ru/i/FDjEIMfKogtzUg',
    mainImage: '',
    widthFrom: 25,
    widthTo: 250,
    heightFrom: 20,
    heightTo: 350,
    diameter: 34,
    article: '62.00.9400',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: 'b95345f0-9abf-43bf-8265-55981c245a43',
    systemGroup: '9a12ba01-e4ab-4f49-a63e-3974bbe83692',
    title: 'Люкс кассетный',
    image: 'https://disk.yandex.ru/i/HnROcA7fymxJ5A',
    mainImage: '',
    widthFrom: 25,
    widthTo: 260,
    heightTo: 260,
    diameter: 34,
    article: '62.00.9400',
    defaultWeighting: 'дописать',
    weightingList: []
  },
  {
    id: '6f3f7d96-7c60-43b6-8f7c-23a859c95d52',
    systemGroup: '9a12ba01-e4ab-4f49-a63e-3974bbe83692',
    title: 'Люкс 2 кассетный',
    image: 'https://disk.yandex.ru/i/vtAtPs3pkROgeQ',
    mainImage: '',
    widthFrom: 25,
    widthTo: 200,
    heightFrom: 20,
    heightTo: 250,
    diameter: 25,
    article: '62.00.Л9778',
    defaultWeighting: 'дописать',
    weightingList: []
  },
]

export const MODIFICATION_GROUP_LIST: ModificationGroup[] = [
  // Размеры рулонной шторы 🚀🗞 (ниже)
  {
    id: '216bc24f-3913-4a9f-9757-5a1512705ceb',
    title: 'Размеры рулонной шторы',
    system: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79',
  },
  {
    id: '894a48d1-4ed6-4b24-a2e1-3737e017a3f4',
    title: 'Размеры рулонной шторы',
    system: '9cb43b35-5fd9-4b0d-82c2-6f52c9ce5138'
  },
  {
    id: '77244256-3a73-43a0-909d-acd2ced66324',
    title: 'Размеры рулонной шторы',
    system: 'f8840877-437f-47db-bbe4-b38088b3844a'
  },
  {
    id: '8439cd06-f1d7-4659-b472-4f2d85738fcc',
    title: 'Размеры рулонной шторы',
    system: '5c5b4aba-7884-4069-a8c1-10409729018c'
  },
  {
    id: 'bf1f865c-2803-4192-8cba-dd3f36631900',
    title: 'Размеры рулонной шторы',
    system: '416833df-7a8d-41fa-b524-17b83197fb6c'
  },
  {
    id: 'b2fc64e3-73d3-48b9-a078-9b1193bce785',
    title: 'Размеры рулонной шторы',
    system: '3478a796-2d8f-410a-815f-2a0937c96ac7'
  },
  {
    id: 'ada86fe1-7973-4db7-bdea-341bbdbdcbf8',
    title: 'Размеры рулонной шторы',
    system: '66cabd96-7b4e-4246-8976-ce464e6b8288'
  },
  {
    id: '2ff70bc8-96e7-4745-bbbb-04d7eddc13d7',
    title: 'Размеры рулонной шторы',
    system: '24eb21c9-6a0f-47b1-9877-6f8389b8a3d0'
  },
  {
    id: '16b18abd-8740-400b-aa60-93d13a5097dd',
    title: 'Размеры рулонной шторы',
    system: 'b39e51c0-1f91-467a-8408-d121c5547f8e'
  },
  {
    id: '7a1ba334-e101-4f82-8f8d-243a786a3d02',
    title: 'Размеры рулонной шторы',
    system: '1032a34b-521c-49f2-b906-add8c034f6da'
  },
  {
    id: 'e1ac2a70-3d26-47de-bfae-d4d1046ea008',
    title: 'Размеры рулонной шторы',
    system: '985fe119-eee3-4491-ba36-6596d730c9bd'
  },
  {
    id: '2a14615a-0451-4180-84c4-71ce946f06a5',
    title: 'Размеры рулонной шторы',
    system: '25785aea-7d8d-4b04-87c9-3e8f05b0e30d'
  },
  {
    id: 'd775f686-85fb-460e-9b47-84fb254fde03',
    title: 'Размеры рулонной шторы',
    system: '2fccbfdf-fb3e-47d2-8f44-1db31f061026'
  },
  {
    id: '636128d4-2542-47cc-a949-a66774794828',
    title: 'Размеры рулонной шторы',
    system: '1fc10d8e-38ad-46f0-b9fd-81dfa08e0549'
  },
  {
    id: '4025d219-36f9-49e5-a48f-c3e48c153581',
    title: 'Размеры рулонной шторы',
    system: 'b95345f0-9abf-43bf-8265-55981c245a43'
  },
  {
    id: 'bebe14b8-b0bb-4485-bd57-0136c1e22d80',
    title: 'Размеры рулонной шторы',
    system: '6f3f7d96-7c60-43b6-8f7c-23a859c95d52'
  },
  // Управление 🖤🎃 (ниже)
  {
    id: 'd23022dd-cdec-4f3c-9ca2-28c869eaa38d',
    title: 'Управление',
    system: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79'
  },
  {
    id: '37bc933e-360d-4ee9-a1e3-5b7339dfa156',
    title: 'Управление',
    system: '9cb43b35-5fd9-4b0d-82c2-6f52c9ce5138'
  },
  {
    id: 'a282114e-2958-4b88-8822-3c9a2ff54047',
    title: 'Управление',
    system: 'f8840877-437f-47db-bbe4-b38088b3844a'
  },
  {
    id: '1c1ba608-94c8-4483-a17d-7e18d2a67df3',
    title: 'Управление',
    system: '5c5b4aba-7884-4069-a8c1-10409729018c'
  },
  {
    id: '12722d35-26e1-487d-8d48-4b3a08763de9',
    title: 'Управление',
    system: '416833df-7a8d-41fa-b524-17b83197fb6c'
  },
  {
    id: '5ae1de14-6236-4300-8cea-89a5b77c1870',
    title: 'Управление',
    system: '3478a796-2d8f-410a-815f-2a0937c96ac7'
  },
  {
    id: 'd0915d14-9388-43fc-bcd5-0e338975e116',
    title: 'Управление',
    system: '66cabd96-7b4e-4246-8976-ce464e6b8288'
  },
  {
    id: 'f72dba28-cae8-479e-8c8b-221622ec68c3',
    title: 'Управление',
    system: '24eb21c9-6a0f-47b1-9877-6f8389b8a3d0'
  },
  {
    id: '0bbbb985-07bf-4133-aae6-f4de44f80f51',
    title: 'Управление',
    system: 'b39e51c0-1f91-467a-8408-d121c5547f8e'
  },
  {
    id: '905f0ddb-61e3-49bb-b026-b65b4739ce0c',
    title: 'Управление',
    system: '1032a34b-521c-49f2-b906-add8c034f6da'
  },
  {
    id: '8c609659-4124-4cde-a4d4-d3ae9d5b4329',
    title: 'Управление',
    system: '985fe119-eee3-4491-ba36-6596d730c9bd'
  },
  {
    id: '03dddc81-59d3-4c76-a78f-b22175be56ff',
    title: 'Управление',
    system: '25785aea-7d8d-4b04-87c9-3e8f05b0e30d'
  },
  {
    id: '6bd1de7f-d9a8-4753-9a22-16700ff59903',
    title: 'Управление',
    system: '2fccbfdf-fb3e-47d2-8f44-1db31f061026'
  },
  {
    id: '1c4f7273-8daa-4b6b-86d5-4819077088e2',
    title: 'Управление',
    system: '1fc10d8e-38ad-46f0-b9fd-81dfa08e0549'
  },
  {
    id: '305f119f-c7ba-4e5b-bfc0-cf90a1dfbae5',
    title: 'Управление',
    system: 'b95345f0-9abf-43bf-8265-55981c245a43'
  },
  {
    id: 'ecb644ed-f281-4538-b503-06692ab3100d',
    title: 'Управление',
    system: '6f3f7d96-7c60-43b6-8f7c-23a859c95d52'
  },
  // Крепление 🪂🪂 (ниже)
  {
    id: '0eeb47f5-0389-4139-a5cd-933bb8e95551',
    title: 'Крепление',
    system: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79'
  },
  {
    id: '5e8d76f0-01f1-4d38-9e90-19cc75133a66',
    title: 'Крепление',
    system: '9cb43b35-5fd9-4b0d-82c2-6f52c9ce5138'
  },
  {
    id: '2b1a205f-2f25-4cc7-821f-9cc8855976ba',
    title: 'Крепление',
    system: 'f8840877-437f-47db-bbe4-b38088b3844a'
  },
  {
    id: '90ede75a-ed2d-4a9b-b81a-6f8e57675bb0',
    title: 'Крепление',
    system: '5c5b4aba-7884-4069-a8c1-10409729018c'
  },
  {
    id: '34e1d96f-d5bb-42c4-b0e5-9039f9ed0b64',
    title: 'Крепление',
    system: '416833df-7a8d-41fa-b524-17b83197fb6c'
  },
  {
    id: '7a39bee4-0c49-46cd-80eb-489aa10c8a09',
    title: 'Крепление',
    system: '3478a796-2d8f-410a-815f-2a0937c96ac7'
  },
  {
    id: '7f138bc6-3e6e-4e7c-9aab-c271e1cbab7b',
    title: 'Крепление',
    system: '66cabd96-7b4e-4246-8976-ce464e6b8288'
  },
  {
    id: '385e477b-d54c-4c6d-89a6-e00e76f6023d',
    title: 'Крепление',
    system: '24eb21c9-6a0f-47b1-9877-6f8389b8a3d0'
  },
  {
    id: 'f5ae360f-ad70-4026-aae4-56f32be5e6ec',
    title: 'Крепление',
    system: 'b39e51c0-1f91-467a-8408-d121c5547f8e'
  },
  {
    id: '8878399a-dddf-48b0-a3ee-403e35b99b6b',
    title: 'Крепление',
    system: '1032a34b-521c-49f2-b906-add8c034f6da'
  },
  {
    id: '30d62ec8-1c37-473e-95d9-969d7b25830b',
    title: 'Крепление',
    system: '985fe119-eee3-4491-ba36-6596d730c9bd'
  },
  {
    id: '0acce0d7-25fe-4bc2-8357-8a745e3612b9',
    title: 'Крепление',
    system: '25785aea-7d8d-4b04-87c9-3e8f05b0e30d'
  },
  {
    id: 'bc22f364-ea92-4765-87d6-17b3982185ee',
    title: 'Крепление',
    system: '2fccbfdf-fb3e-47d2-8f44-1db31f061026'
  },
  {
    id: '20d74501-ac7f-45af-878b-fb322053e340',
    title: 'Крепление',
    system: '1fc10d8e-38ad-46f0-b9fd-81dfa08e0549'
  },
  {
    id: 'a885e9bc-d11d-4d13-8c9c-10361469a92e',
    title: 'Крепление',
    system: 'b95345f0-9abf-43bf-8265-55981c245a43'
  },
  {
    id: 'b5961e14-e7b1-4fa0-9496-3ddb97f0677f',
    title: 'Крепление',
    system: '6f3f7d96-7c60-43b6-8f7c-23a859c95d52'
  },
  // Типы направляющих 🍔🍳
  {
    id: '3ebf8a13-bd7d-4a3b-83a3-e0f52bd16613',
    title: 'Типы направляющих',
    system: '9cb43b35-5fd9-4b0d-82c2-6f52c9ce5138'
  },
]

export const MODIFICATION_LIST: Modification[] = [
  // Размеры рулонной шторы
  {
    id: 'df940a8f-a067-40e5-a421-206f290de4b6',
    modificationGroup: '216bc24f-3913-4a9f-9757-5a1512705ceb',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: 'd0812498-b6bb-4903-a057-2874672c805c',
    modificationGroup: '894a48d1-4ed6-4b24-a2e1-3737e017a3f4',
    title: 'Замер по габариту направляющих',
    image: 'https://disk.yandex.ru/i/_H-f9ZpsfKtiMw',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: 'd494efaf-5368-49b5-a197-2257f66e401d',
    modificationGroup: '77244256-3a73-43a0-909d-acd2ced66324',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '6bc05789-4a00-49ab-97eb-d257b9336a87',
    modificationGroup: '8439cd06-f1d7-4659-b472-4f2d85738fcc',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: 'b1ab51cf-5826-438e-af48-6717c0be9ae4',
    modificationGroup: 'bf1f865c-2803-4192-8cba-dd3f36631900',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: 'b4dc1271-ef9f-4ea8-a8e1-803ee485225b',
    modificationGroup: 'b2fc64e3-73d3-48b9-a078-9b1193bce785',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '1bc54057-1ea8-45a5-820a-f0505fa0b294',
    modificationGroup: 'ada86fe1-7973-4db7-bdea-341bbdbdcbf8',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: 'a5465a76-6f6d-4c37-bf9a-7dab24dec96c',
    modificationGroup: '2ff70bc8-96e7-4745-bbbb-04d7eddc13d7',
    title: 'Замер по световому проему',
    image: 'https://disk.yandex.ru/i/ZbCoVbc3wFiiEw',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
      {
        label: 'Глубина штапика, мм',
        placeholder: '0-30',
      },
    ]
  },
  {
    id: 'fc81166f-b217-48d7-a5be-8c0be6a02503',
    modificationGroup: '16b18abd-8740-400b-aa60-93d13a5097dd',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '1836b8d6-ff76-4e50-bdea-81fc4fc7a16e',
    modificationGroup: '7a1ba334-e101-4f82-8f8d-243a786a3d02',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: 'b2707d0b-4a90-4e06-97e3-826b6361daad',
    modificationGroup: 'e1ac2a70-3d26-47de-bfae-d4d1046ea008',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '7ddece7d-c769-4393-bd4f-017f85d7dea1',
    modificationGroup: '2a14615a-0451-4180-84c4-71ce946f06a5',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '2131476e-c66d-4919-94ef-5989aeaa8fa5',
    modificationGroup: 'd775f686-85fb-460e-9b47-84fb254fde03',
    title: 'Замер по габариту направляющих',
    image: 'https://disk.yandex.ru/i/_H-f9ZpsfKtiMw',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '2568c220-c1ed-4de1-a24f-c6e27c2d237d',
    modificationGroup: '636128d4-2542-47cc-a949-a66774794828',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  {
    id: '1582577a-da92-4e45-9a18-2114fecbda09',
    modificationGroup: 'bebe14b8-b0bb-4485-bd57-0136c1e22d80',
    title: 'Замер по ткани',
    image: 'https://disk.yandex.ru/i/E2IeUBiVOVfp5Q',
    fields: [
      {
        label: 'Ширина, см',
        placeholder: '',
      },
      {
        label: 'Высота, см',
        placeholder: '',
      },
    ]
  },
  // Управление (d23022dd-cdec-4f3c-9ca2-28c869eaa38d)
  {
    id: '294c5d11-bdcc-49b8-97ab-c2b0bade3ff6',
    modificationGroup: 'd23022dd-cdec-4f3c-9ca2-28c869eaa38d',
    title: 'Правое',
    fields: [
      {
        label: 'Высота управления, см',
        placeholder: ''
      }
    ]
  },
  {
    id: 'da2a41c6-c19f-4a60-9923-52397b7bf9e7',
    modificationGroup: 'd23022dd-cdec-4f3c-9ca2-28c869eaa38d',
    title: 'Левое',
    fields: [
      {
        label: 'Высота управления, см',
        placeholder: ''
      }
    ]
  },
  // Крепление (0eeb47f5-0389-4139-a5cd-933bb8e95551)
  {
    id: '41d7cc5a-1a5a-4f87-b5c4-a06a9fa36063',
    modificationGroup: '0eeb47f5-0389-4139-a5cd-933bb8e95551',
    title: 'Крепление на створку без сверления',
    isRecommended: true,
    fields: []
  },
  {
    id: '146f3734-47c3-4d69-b220-929687836944',
    modificationGroup: '0eeb47f5-0389-4139-a5cd-933bb8e95551',
    title: 'Настенное',
    fields: []
  },
  {
    id: '2709de87-35a8-4e33-b97d-f19a68103b3d',
    modificationGroup: '0eeb47f5-0389-4139-a5cd-933bb8e95551',
    title: 'Потолочное',
    fields: []
  },

  // Типы направляющих (3ebf8a13-bd7d-4a3b-83a3-e0f52bd16613)
  {
    id: 'b7ea8178-5e3e-4d5c-8e83-bbd197ff9e42',
    modificationGroup: '3ebf8a13-bd7d-4a3b-83a3-e0f52bd16613',
    title: 'П-образные',
    fields: []
  },
  {
    id: 'aa5200e1-ff45-4c2c-be4d-31e73e925722',
    modificationGroup: '3ebf8a13-bd7d-4a3b-83a3-e0f52bd16613',
    title: 'Плоские',
    fields: []
  },
]


export const SYSTEM_ELEMENT_LIST: SystemElement[] = [
  {
    id: 'f18f4109-231c-4417-8887-c36530e468a6',
    title: 'Механизм',
    system: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79',
    colorList: [],
    colorTitle: 'Цвет механизма',
    isMain: true,
    basicColorTitle: 'Пластик белый (базовая комплектация)',
  }
]

export const SYSTEM_ELEMENT_COLOR_LIST: SystemElementColor[] = [
  // Цепочное - Мини
  {
    id: '',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/PnagDrz3mO_AwA',
  },
  {
    id: '',
    title: 'Ваниль',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/qzI3sshVTVh1lA',
  },
  {
    id: '',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/K2e2BxNkN09Lyw',
  },
  {
    id: '',
    title: 'Антрацит',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/rzxyR1XsOlsF4Q',
  },
  {
    id: '',
    title: 'Черный',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/yzKuPztkI7rFiA',
  },
  {
    id: '',
    title: 'Бронза',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/vWMkN1OWVLAVVA',
  },
  // Цепочное - Миникассета
  {
    id: '',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/Vt_pIHVGAt6L3g',
  },
  {
    id: '',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/2wiFlWsiJf9rJQ',
  },
  {
    id: '',
    title: 'Светлый дуб',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/Sa1MJcO_Dqr0zA',
  },
  {
    id: '',
    title: 'Темно-коричневый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/j5DuGxJpJ6qQEQ',
  },
  {
    id: '',
    title: 'Антрацит',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/YAnlhnk5TPviBg',
  },
  {
    id: '',
    title: 'Черный',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/o_YrniB49whQPA',
  },
  // Цепочное - Люкс
  {
    id: '',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/0BbR4Gdsde_6OQ',
  },
  {
    id: '',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/rQ2TskI_Y_HrwA',
  },
  {
    id: '',
    title: 'Светло-бежевый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/kA6Ht_J7Ty321A',
  },
  {
    id: '',
    title: 'Бежевый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/GHfYA5DkFGwQCg',
  },
  {
    id: '',
    title: 'Темно-коричневый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/0oEjdy32zLi7bg',
  },
]

// function helpers(){
//     export const output = SYSTEM_LIST.map((system)=>{
//         return {
//             id: '',
//             title: 'Крепление',
//             system: system.id