import { Weighting, WeightingColor } from "../types"

// Элементы могут дублироваться для каждой системы
export const WEIGHTING_LIST: Weighting[] = [
  {
    id: '47ebeee0-14c2-400b-9400-3fe51387fdfc',
    title: 'Утяжелитель "Миникассета"',
    basicEquipment: '',
    image: 'пока нет',
    colorList: [
      '3d835576-065a-48e4-b642-0a28a6ecd649',
      'fa1f5c66-2366-4b9b-a4cf-4f92cb9e7d89',
      '335eb5f8-a3ba-4456-be30-8b9c009f218d',
      'c7d169be-1259-4339-bdf6-f5b723e5d695',
      'ae3041eb-f669-41e9-90b2-80901964bd8e',
      '6f539bdb-cb37-4b70-81e8-88457a4afc3f',
    ]
  }
]

// Элементы могут дублироваться для каждого утяжелителя
export const WEIGHTING_COLOR_LIST: WeightingColor[] = [
  {
    id: '3d835576-065a-48e4-b642-0a28a6ecd649',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/Vt_pIHVGAt6L3g',
  },
  {
    id: 'fa1f5c66-2366-4b9b-a4cf-4f92cb9e7d89',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/2wiFlWsiJf9rJQ',
  },
  {
    id: '335eb5f8-a3ba-4456-be30-8b9c009f218d',
    title: 'Светлый дуб',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/Sa1MJcO_Dqr0zA',
  },
  {
    id: 'c7d169be-1259-4339-bdf6-f5b723e5d695',
    title: 'Темно-коричневый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/j5DuGxJpJ6qQEQ',
  },
  {
    id: 'ae3041eb-f669-41e9-90b2-80901964bd8e',
    title: 'Антрацит',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/YAnlhnk5TPviBg',
  },
  {
    id: '6f539bdb-cb37-4b70-81e8-88457a4afc3f',
    title: 'Черный',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/o_YrniB49whQPA',
  },
]