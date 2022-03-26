export type ID = string
export type ImageUrl = string

// Группа систем (1 этап)
export type SystemGroup = {
  id: ID
  // Название группы систем
  title: string
  // Картинка группы систем
  image: ImageUrl
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
  // Картинка для конструктора зависящая от системы
  mainImage: ImageUrl
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
  // ID дефолтного утяжелителя (должен быть в weightingList самым первым)
  defaultWeighting: ID
  // Список ID утяжелителей привязанных к системе
  weightingList: ID[]
}


// Элемент системы, например Ручка (3 этап)
export type SystemElement = {
  id: ID
  // Название элемента, например Ручка
  title: string
  // Название блока когда идет выбор цвета, например Цвет ручки
  colorTitle: string
  // ID системы к которой привязан элемент
  system: ID
  // Список доступных цветов для данного элемента
  colorList: Array<{
    id: ID,
    mainImage: ImageUrl,
  }>
  // Для механизмов (от их цвета зависят цвета всего остального)
  isMain?: boolean
  // Название для цвета базовой комплектации, например Белый (базовая комплектация)
  basicColorTitle: string
  // К группе может быть привязан селект, например Высота управления
  select?: {
    title: string
    options: string[]
  }
}

// Цвет элемента системы, например цвет Ручки (3 этап)
export type SystemElementColor = {
  id: ID
  // Название
  title: string
  // Картинка для конструктора зависящая от системы
  mainImage: ImageUrl
  // Металлический ли цвет
  isMetallic?: boolean
  // Пластиковый ли цвет
  isPlastic?: boolean
} & (
    {
      // HEX цвет, если нет картинки
      color: string
    } | {
      // Картинка, если нету цвета
      image: ImageUrl
    }
  )

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
}

// Ткани для штор (3 этап)
export type Fabric = {
  id: ID
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
  system: ID
  // Картинка для конструктора зависящая от системы
  mainImage: ImageUrl
} & (
    {
      // HEX цвет, если нет картинки
      color: string
    } | {
      // Картинка ткани, если нету цвета
      image: ImageUrl
    }
  )

// Утяжелитель (4 этап)
export type Weighting = {
  id: ID
  // Название утяжелителя
  title: string
  // Картинка утяжелителя
  image: ImageUrl
  // Дефолтное значение, добавляет постфикс ("базовая комплектация")
  basicEquipment: ID,
  // Список цветов доступных для данного утяжелителя
  colorList: ID[]
}


// Цвет фиксатора (4 этап)
export type WeightingColor = {
  id: ID
  // Название
  title: string
  // Картинка для конструктора зависящая от системы
  mainImage: ImageUrl
} & (
    {
      // HEX цвет, если нет картинки
      color: string
    } | {
      // Картинка, если нету цвета
      image: ImageUrl
    }
  )


// Фиксации (4 этап)
export type Fixation = {
  id: ID
  // Название фиксации
  title: string
  // Картинка фиксации
  image: ImageUrl
  // Дефолтное значение, добавляет постфикс ("базовая комплектация")
  basicEquipment: ID,
  // Список цветов доступных для данной фиксации
  colorList: ID[]
  // Кастомные поля
  fields?: Array<{
    title: string
    defaultValue?: string
    placeholder: string
  }>
}


// Цвет фиксатора (4 этап)
export type FixationColor = {
  id: ID
  // Название
  title: string
} & (
    {
      // HEX цвет, если нет картинки
      color: string
    } | {
      // Картинка, если нету цвета
      image: ImageUrl
    }
  )
