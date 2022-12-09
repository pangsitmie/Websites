import { tokens } from "../theme";

export const mockDataUser = [
  {
    id: 0,
    status: "正常",
    reason: "None",
    enable: true,
    uid: 0,
    username: "Name 0",
    imgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    phone: "1-234-567-89",
    password: "pass123",
    sex: 0, //0=male , 1 = female
    birthday: "1990-01-01"
  },
  {
    id: 1,
    status: "正常",
    reason: "None",
    enable: true,
    uid: 1,
    username: "Name 1",
    imgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    phone: "1-234-567-89",
    password: "pass123",
    sex: 1, //0=male , 1 = female
    birthday: "1990-01-01"
  },
  {
    id: 2,
    status: "封鎖",
    reason: "Invalid email address",
    enable: true,
    uid: 2,
    username: "Name 2",
    imgURL: "https://www.healthiummedtech.com/codefiles/NewTheme/img/team-imgs/ramesh-subrahmanian.jpg",
    phone: "2-345-678-90",
    password: "pass2",
    sex: 0, //0=male , 1 = female
    birthday: "1990-02-02"
  },
  {
    id: 3,
    status: "正常",
    reason: "",
    enable: true,
    uid: 3,
    username: "Name 3",
    imgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    phone: "3-456-789-01",
    password: "pass3",
    sex: 1, //0=male , 1 = female
    birthday: "1990-03-03"
  },


];

export const mockBrandData = [
  {
    id: 0,
    logoImgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    coverImgURL: "https://i.imgur.com/4YQqX2m.png",
    brandName: "Brand 0",
    brandDesc: "Brand 0 description",
    brandManager: "Manager 0",
    brandManagerPhone: "097-123-4567",
    brandManagerEmail: "manager@gmail.com",
    brandManagerLine: "@manager",
    brandTax: "123-456-789",
    brandExpireDate: "2020-12-31",
    status: "正常",
    review: "通過",
  },
  {
    id: 1,
    logoImgURL: "https://i.imgur.com/4YQqX2m.png",
    coverImgURL: "https://i.imgur.com/4YQqX2m.png",
    brandName: "Brand 1",
    brandDesc: "Brand 1 description",
    brandManager: "Manager 1",
    brandManagerPhone: "097-123-4561",
    brandManagerEmail: "manager@gmail.com",
    brandManagerLine: "@manager",
    brandTax: "123-456-789",
    brandExpireDate: "2020-12-31",
    status: "停用",
    review: "待審核",
  },
  {
    id: 2,
    logoImgURL: "https://i.imgur.com/4YQqX2m.png",
    coverImgURL: "https://i.imgur.com/4YQqX2m.png",
    brandName: "Brand 2",
    brandDesc: "Brand 2 description",
    brandManager: "Manager 2",
    brandManagerPhone: "097-123-4567",
    brandManagerEmail: "manager@gmail.com",
    brandManagerLine: "@manager",
    brandTax: "123-456-789",
    brandExpireDate: "2020-12-31",
    status: "正常",
    review: "封鎖",
  },
  {
    id: 3,
    logoImgURL: "https://i.imgur.com/4YQqX2m.png",
    coverImgURL: "https://i.imgur.com/4YQqX2m.png",
    brandName: "Brand 3",
    brandDesc: "Brand 3 description",
    brandManager: "Manager 3",
    brandManagerPhone: "097-123-4567",
    brandManagerEmail: "manager@gmail.com",
    brandManagerLine: "@manager",
    brandTax: "123-456-789",
    brandExpireDate: "2020-12-31",
    status: "正常",
    review: "通過",
  },
  {
    id: 4,
    logoImgURL: "https://i.imgur.com/4YQqX2m.png",
    coverImgURL: "https://i.imgur.com/4YQqX2m.png",
    brandName: "Brand 4",
    brandDesc: "Brand 4 description",
    brandManager: "Manager 4",
    brandManagerPhone: "097-123-4567",
    brandManagerEmail: "manager@gmail.com",
    brandManagerLine: "@manager",
    brandTax: "123-456-789",
    brandExpireDate: "2020-12-31",
    status: "正常",
    review: "通過",
  },
  {
    id: 5,
    logoImgURL: "https://i.imgur.com/4YQqX2m.png",
    coverImgURL: "https://i.imgur.com/4YQqX2m.png",
    brandName: "Brand 5",
    brandDesc: "Brand 5 description",
    brandManager: "Manager 5",
    brandManagerPhone: "097-123-4567",
    brandManagerEmail: "manager@gmail.com",
    brandManagerLine: "@manager",
    brandTax: "123-456-789",
    brandExpireDate: "2020-12-31",
    status: "正常",
    review: "待審核",
  }
];

export const citiesData = [
  {
    id: 0,
    name: "基隆市",
  },
  {
    id: 1,
    name: "台北市",
  },
  {
    id: 2,
    name: "新北市",
  },
  {
    id: 3,
    name: "桃園市",
  },
  {
    id: 4,
    name: "新竹市",
  },
  {
    id: 5,
    name: "新竹縣",
  },
  {
    id: 6,
    name: "苗栗縣",
  },
  {
    id: 7,
    name: "台中市",
  },
  {
    id: 8,
    name: "彰化縣",
  },
  {
    id: 9,
    name: "南投縣",
  },
  {
    id: 10,
    name: "雲林縣",
  },
  {
    id: 11,
    name: "嘉義市",
  },
  {
    id: 12,
    name: "嘉義縣",
  },
  {
    id: 13,
    name: "台南市",
  },
  {
    id: 14,
    name: "高雄市",
  },
  {
    id: 15,
    name: "屏東縣",
  },
  {
    id: 16,
    name: "宜蘭縣",
  },
  {
    id: 17,
    name: "花蓮縣",
  },
  {
    id: 18,
    name: "台東縣",
  },
  {
    id: 19,
    name: "澎湖縣",
  },
  {
    id: 20,
    name: "金門縣",
  },
  {
    id: 21,
    name: "連江縣",
  }
];

export const mockStoreData = [
  {
    id: 0,
    status: "正常",
    reason: "Reason N/A",
    brandInfo: {
      id: 0,
      name: mockBrandData[0].brandName,
    },
    name: "Store 0",
    storeImgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    storeAddress: {
      city: "基隆市",
      district: "仁愛區",
      road: "仁愛路一段123號",
    },
    storeManager: {
      name: "Manager 0",
      phone: "097-123-4567",
      email: "manager0@gmail.com",
      line: "@manager0"
    },
    remarks: "N/A"
  },
  {
    id: 1,
    status: "停用",
    reason: "Reason N/A",
    brandInfo: {
      id: 1,
      name: mockBrandData[1].brandName,
    },
    name: "Store 1",
    storeImgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    storeAddress: {
      city: "台北市",
      district: "中正區",
      road: "中正路一段123號",
    },
    storeManager: {
      name: "Manager 1",
      phone: "097-123-4567",
      email: "@manager1"
    },
    remarks: "N/A"
  },
  {
    id: 2,
    status: "正常",
    reason: "Reason N/A",
    brandInfo: {
      id: 2,
      name: mockBrandData[2].brandName,
    },
    name: "Store 2",
    storeImgURL: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    storeAddress: {
      city: "台北市",
      district: "中正區",
      road: "中正路一段123號",
    },
    storeManager: {
      name: "Manager 1",
      phone: "097-123-4567",
      email: "@manager1"
    },
    remarks: "N/A"
  }
];

export const mockMachineData = [
  {
    id: 0,
    status: "正常",
    reason: "Reason N/A",
    machineCode: "MA-0000",
    uuid: "UUID-0000",
    brandInfo: {
      id: 0,
      name: mockBrandData[0].brandName,
    },
    storeInfo: {
      id: 0,
      name: mockStoreData[0].name,
    },
    nfcid: "NFCID-0000",
    qrcode: "QR-0000",
    name: "Machine 0",
    spending: 0,
    remarks: "N/A 0"
  },
  {
    id: 1,
    status: "正常",
    reason: "Reason N/A",
    machineCode: "MA-1111",
    uuid: "UUID-1111",
    brandInfo: {
      id: 1,
      name: mockBrandData[1].brandName,
    },
    storeInfo: {
      id: 1,
      name: mockStoreData[1].name,
    },
    nfcid: "NFCID-1111",
    qrcode: "QR-1111",
    name: "Machine 1",
    spending: 1,
    remarks: "N/A 1"
  },
  {
    id: 2,
    status: "正常",
    reason: "Reason N/A",
    machineCode: "MA-2222",
    uuid: "UUID-2222",
    brandInfo: {
      id: 2,
      name: mockBrandData[2].brandName,
    },
    storeInfo: {
      id: 2,
      name: mockStoreData[2].name,
    },

    nfcid: "NFCID-2222",
    qrcode: "QR-2222",
    name: "Machine 2",
    spending: 2,
    remarks: "N/A 2"
  },


];







// NOT USED
export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];
