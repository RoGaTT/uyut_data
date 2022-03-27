import { Fixation, FixationColor } from "../types"

// Элементы могут дублироваться для каждой системы
export const FIXATION_LIST: Fixation[] = [
  {
    id: '37bc7466-b415-412f-8362-50bce7b1b0a6',
    title: 'Нижняя магнитная фиксация Тип 1',
    isBasicEquipment: false,
    image: "",
    colorList: [
      "9741749a-1be0-4bf1-b1e8-f38409e88338",
      "c82cf87a-72ad-49a4-be0c-2f68549dcd1f"
    ],
    fields: []
  }
]

export const FIXATION_COLOR_LIST: FixationColor[] = [
  {
    id: "9741749a-1be0-4bf1-b1e8-f38409e88338",
    title: "Белый",
    image: "https://disk.yandex.ru/i/aIIBn_fGeBaJFg",
  },
  {
    id: "c82cf87a-72ad-49a4-be0c-2f68549dcd1f",
    title: "Ваниль",
    image: "https://disk.yandex.ru/i/_KksKWXstRVSUA",
  }
]