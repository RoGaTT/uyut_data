export type ID = string
export type ImageUrl = string

// Группа систем (1 этап)
export type SystemGroup = {
  id: ID
  // Название группы систем
  title: string
  // Картинка группы систем
  image: ImageUrl
  // Коллекция тканей
  fabricCollectionType: 'classic' | 'day_night'
}


// Система (1 этап)
export type System = {
  id: ID,
  // Группа системы
  systemGroup: ID,
  // Название системы
  title: string,
  // Картинка системы подставляющайся при выборе в конструкторе
  image: ImageUrl,
  // // Картинка для конструктора зависящая от системы
  // mainImage: ImageUrl
  // PDF если есть
  pdf?: ImageUrl,
  // Ширина от, см
  widthFrom: number,
  // Ширина до, см
  widthTo: number,
  // Высота от, см
  heightFrom?: number,
  // Высота до, см
  heightTo: number
  // Диаметр вала
  diameter: number,
  // Артикул
  article: string,
  // // ID дефолтного утяжелителя (должен быть в weightingList самым первым)
  // defaultWeighting: ID
  // // Список ID утяжелителей привязанных к системе
  // weightingList: ID[]
  // Список ID фиксаций привязанных к системе
  // fixationList: ID[]
}


// Элемент системы, например Ручка (3 этап)
export type SystemElement = {
  id: ID
  // Название элемента, например Ручка
  title: string
  // ID системы к которой привязан элемент
  system: ID
  // Список доступных цветов для данного элемента
  colorList: Array<{
    title: ImageUrl,
    leftMainImage?: ImageUrl,
    rightMainImage?: ImageUrl
    // Металлический ли цвет
    isMetallic?: boolean
    // Пластиковый ли цвет
    isPlastic?: boolean
    image: string
  }>
  // Для механизмов (от их цвета зависят цвета всего остального)
  isMain?: boolean
  // К группе может быть привязан селект, например Высота управления
  select?: {
    title: string
    options: string[]
  }
}

// Группа модификаторов (2 этап)
export type ModificationGroup = {
  id: ID
  // Название группы модификаторов (может дублироваться)
  title: string
  // Система к которой привязана группа модификаторов
  system: ID
}


// Модификтатор (2 этап)
export type Modification = {
  id: ID
  // Название модификатора
  title: string
  // Группа модификаторов
  modificationGroup: ID
  // Рекомендуется ли модификатор (добавляет постфикс "(рекомендуется)")
  isRecommended?: boolean
  // Кастомные поля для модификатора
  fields: Array<{
    label: string
    placeholder: string
  }>
  // Изображение привязанное к системе, отображается справа в блоке группы модификаторов например в Размеры рулонной шторы
  image?: ImageUrl
  // Изображение для конструктора
  mainImage?: ImageUrl
  direction?: 'right' | 'left'
}

// Ткани для штор (3 этап)
export type Fabric = {
  id: ID
  innerID: string
  // Название
  title: string
  // Артикул
  article: string
  // Ширина от, см
  widthFrom: number,
  // Ширина до, см
  widthTo: number,
  // Высота от, см
  heightFrom: number,
  // Высота до, см
  heightTo: number
  // Система к которой привязана ткань
  systemGroup: ID
  fabricGroupType: 'classic' | 'day_night'
  // Картинка для конструктора зависящая от системы
  mainImage: ImageUrl
  // Картинка ткани, если нету цвета
  image: ImageUrl
}

// Утяжелитель (4 этап)
export type ExtraSystemElement = {
  id: ID
  // Название элемента
  title: string
  // Картинка элемента
  image: ImageUrl
  // Список цветов доступных для данного элемента
  colorList: Array<{
    image: ImageUrl,
    title: string
    mainImage?: ImageUrl
  }>
  system: ID
  type: 'weighting' | 'fixation',
}
