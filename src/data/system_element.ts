import { SystemElement, SystemElementColor } from "../types"

// Элементы могут дублироваться для каждой системы
export const SYSTEM_ELEMENT_LIST: SystemElement[] = [
  {
    id: 'f18f4109-231c-4417-8887-c36530e468a6',
    title: 'Механизм',
    system: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79',
    colorList: [
      {
        id: 'aa37746e-6f42-4d60-8b62-cf25ea6e6964',
        mainImage: 'дописать'
      },
      {
        id: 'e3104457-1eb2-4e56-8f3c-01a41df8cc5f',
        mainImage: 'дописать'
      },
      {
        id: '020b9bcf-ba5f-40e5-ad38-7aa61dbeb47e',
        mainImage: 'дописать'
      },
      {
        id: 'e30bc69a-8f16-4770-b591-36e5fd56d6ce',
        mainImage: 'дописать'
      },
      {
        id: '53fb3b0a-4e06-4d63-af90-1632c5a8ef8c',
        mainImage: 'дописать'
      },
      {
        id: 'c0136903-49cc-48ee-8066-555335201bb0',
        mainImage: 'дописать'
      },
    ],
    colorTitle: 'Цвет механизма',
    isMain: true,
    basicColorTitle: 'Пластик белый (базовая комплектация)',
  },
  {
    id: '260aca96-8acf-4e04-b1c2-ed22c2c281ae',
    title: 'Цепочка',
    system: 'c538ecd1-12f4-43ef-be7a-dbaf228e4c79',
    colorList: [
      {
        id: '5d7194b5-388c-4eb4-aaf4-c519719ea57c',
        mainImage: 'дописать',
      },
      {
        id: 'af44c448-fc63-4345-8e23-406d4c9b3993',
        mainImage: 'дописать',
      },
      {
        id: 'f8e6b9cd-0170-46d2-ba06-cb881a4fcc3a',
        mainImage: 'дописать',
      },
      {
        id: 'd032a4bb-03bd-450c-aaaa-c2a2a4f1625c',
        mainImage: 'дописать',
      },
      {
        id: '8445ecb3-c926-4d70-a3b7-fbda3e9ff623',
        mainImage: 'дописать',
      },
      {
        id: '85cd4769-1f53-433f-977e-aa4949df9e56',
        mainImage: 'дописать',
      },
    ],
    colorTitle: 'Цвет цепочки',
    basicColorTitle: 'Пластик белый (базовая комплектация)',
  },
]

export const SYSTEM_ELEMENT_COLOR_LIST: SystemElementColor[] = [
  // Цепочное - Мини
  {
    id: 'aa37746e-6f42-4d60-8b62-cf25ea6e6964',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/PnagDrz3mO_AwA',
  },
  {
    id: 'e3104457-1eb2-4e56-8f3c-01a41df8cc5f',
    title: 'Ваниль',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/qzI3sshVTVh1lA',
  },
  {
    id: '020b9bcf-ba5f-40e5-ad38-7aa61dbeb47e',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/K2e2BxNkN09Lyw',
  },
  {
    id: 'e30bc69a-8f16-4770-b591-36e5fd56d6ce',
    title: 'Антрацит',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/rzxyR1XsOlsF4Q',
  },
  {
    id: '53fb3b0a-4e06-4d63-af90-1632c5a8ef8c',
    title: 'Черный',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/yzKuPztkI7rFiA',
  },
  {
    id: 'c0136903-49cc-48ee-8066-555335201bb0',
    title: 'Бронза',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/vWMkN1OWVLAVVA',
  },
  // Цепочное - Миникассета
  {
    id: '7e2d869b-b747-4d0a-be9a-641ba59f8f92',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/Vt_pIHVGAt6L3g',
  },
  {
    id: '787b6157-8d8f-49d7-a7b2-70e5965cbb21',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/2wiFlWsiJf9rJQ',
  },
  {
    id: '4339bbf3-81f3-45d2-8cb7-a1c879dd0466',
    title: 'Светлый дуб',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/Sa1MJcO_Dqr0zA',
  },
  {
    id: '7a1be154-0a29-40ba-bcdc-06373818a2b3',
    title: 'Темно-коричневый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/j5DuGxJpJ6qQEQ',
  },
  {
    id: '7c0d431b-eba4-4126-b621-098cdf318c29',
    title: 'Антрацит',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/YAnlhnk5TPviBg',
  },
  {
    id: '5da4da49-0583-4750-9251-e62ba589cdf2',
    title: 'Черный',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/o_YrniB49whQPA',
  },
  // Цепочное - Люкс
  {
    id: '7b761163-8e19-4061-a787-1aea9095d62c',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/0BbR4Gdsde_6OQ',
  },
  {
    id: '6b5e3e7b-5b51-40ec-82ef-f5adc01c65f0',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/rQ2TskI_Y_HrwA',
  },
  {
    id: '63eee9a4-13c7-4787-8b1c-30bccaef906e',
    title: 'Светло-бежевый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/kA6Ht_J7Ty321A',
  },
  {
    id: '97220a24-1345-4e91-9f0c-e9153787ad25',
    title: 'Бежевый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/GHfYA5DkFGwQCg',
  },
  {
    id: '64055988-7898-487f-a912-46980fcd1645',
    title: 'Темно-коричневый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/0oEjdy32zLi7bg',
  },
  // Цепочное - Мини - Цепочка
  {
    id: '5d7194b5-388c-4eb4-aaf4-c519719ea57c',
    title: 'Белый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/PnagDrz3mO_AwA',
  },
  {
    id: 'af44c448-fc63-4345-8e23-406d4c9b3993',
    title: 'Ваниль',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/qzI3sshVTVh1lA',
  },
  {
    id: 'f8e6b9cd-0170-46d2-ba06-cb881a4fcc3a',
    title: 'Серый',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/K2e2BxNkN09Lyw',
  },
  {
    id: 'd032a4bb-03bd-450c-aaaa-c2a2a4f1625c',
    title: 'Антрацит',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/rzxyR1XsOlsF4Q',
  },
  {
    id: '8445ecb3-c926-4d70-a3b7-fbda3e9ff623',
    title: 'Черный',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/yzKuPztkI7rFiA',
  },
  {
    id: '85cd4769-1f53-433f-977e-aa4949df9e56',
    title: 'Бронза',
    mainImage: 'дописать',
    image: 'https://disk.yandex.ru/i/vWMkN1OWVLAVVA',
  },

]