import { gql } from "@apollo/client";


// ========================= AUTH =========================
export const GetManagerAccessToken = gql`
query GetManagerAccessToken($refreshToken: String!) {
  getManagerAccessToken(refreshToken: $refreshToken)
}
`
export const GetAccessToken = gql`
query getAccessToken($refreshToken: String!) {
  getAccessToken(refreshToken: $refreshToken)
}
`

// ========================= Member =========================
export const GetAllMember = gql`
query GetAllMember {
  getAllMember{
    id
    profile {
      memberId
      nickname
      birthday
    }
    phone {
      country
      number
    }
    status {
      name
    }
    career {
      memberId
      continuousLoginDays
      totalLoginDays
      lastSignAt
    }
  }
}
`
export const BanMember = gql`
query GetMember($params: [MemberArgs!]!, $reason: String!, $expireAt: Int) {
  getMember(params: $params) {
    ban(reason: $reason, expireAt: $expireAt)
  }
}
`
export const UnbanMember = gql`
query GetMember($params: [MemberArgs!]!, $reason: String!) {
  getMember(params: $params) {
    unban(reason: $reason)
  }
}
`

// ========================= Brand =========================
export const GetAllBrands = gql`
query ManagerGetBrands {
  managerGetBrands {
    id
    name
    vatNumber
    cover
    intro
    logo
    status {
      id
      description
      name
    }
    principal {
      id
      name
      lineUrl
      email
      createdAt
    }
  }
}
`

export const GetBrandList = gql`
query ManagerGetBrands {
  managerGetBrands {
    id
    name
    currency {
      id
      name
      type {
        id
        name
      }
    }
  }
}
`
export const GetBrand = gql`
query GetBrand($args: [BrandArgs!]!) {
  getBrand(args: $args) {
    id
    name
    vatNumber
    status {
      name
    }
    currency {
      id
      name
    }
    cover
    intro
    logo
    principal {
      id
      name
      lineUrl
      email
      createdAt
    }
  }
}
`
export const UpdateBrand = gql`
query GetBrand($args: [BrandArgs!]!, $name: String, $vatNumber: String, $intro: String, $currencyName: String, $principal: UpdateBrandPrincipalArgs, $statusId: EUpdateBrandStatus) {
  getBrand(args: $args) {
    update(name: $name, vatNumber: $vatNumber, intro: $intro, currencyName: $currencyName, principal: $principal, statusId: $statusId)
  }
}
`
export const BanBrand = gql`
query GetBrand($args: [BrandArgs!]!, $expireAt: Int, $reason: String!) {
  getBrand(args: $args) {
    ban(expireAt: $expireAt, reason: $reason)
  }
}
`
export const UnbanBrand = gql`
query GetBrand($args: [BrandArgs!]!) {
  getBrand(args: $args) {
    unBan
  }
}
`
export const RemoveBrand = gql`
query GetBrand($args: [BrandArgs!]!) {
  getBrand(args: $args) {
    remove
  }
}
`

//========================= STORES =========================
export const GetAllStores = gql`
query ManagerGetStores {
  managerGetStores {
    id
    name
    brand {
      id
      name
    }
    status {
      id
      description
      name
    }
    location {
      storeId
      city
      district
      address
      description
    }
  }
}
`
export const GetStore = gql`
query GetStore($args: [StoreArgs!]!) {
  getStore(args: $args) {
    id
    name
    cover
    intro
    brand {
      id
      name
    }
    status {
      id
      description
      name
    }
    location {
      city
      district
      address
      description
    }
    principal {
      name
      lineUrl
      email
    }
    managerGetMachines {
      id
      uuid
      code
      name
      status {
        id
        description
        name
      }
      connStatus
    }
  }
}
`
export const CreateStore = gql`
query GetBrand($args: [BrandArgs!]!, $name: String!, $location: CreateStoreLocationArgs!, $principal: CreateStorePrincipalArgs!, $intro: String, $cover: String!) {
  getBrand(args: $args) {
    createStore(name: $name, location: $location, principal: $principal, intro: $intro, cover: $cover)
  }
}
`
export const UpdateStore = gql`
query GetStore($args: [StoreArgs!]!, $name: String, $intro: String, $location: UpdateStoreLocationArgs, $principal: UpdateStorePrincipalArgs, $statusId: EUpdateStoreStatus) {
  getStore(args: $args) {
    update(name: $name, intro: $intro, location: $location, principal: $principal, statusId: $statusId)
  }
}
`
export const BanStore = gql`
query GetStore($args: [StoreArgs!]!, $reason: String!, $expireAt: Int) {
  getStore(args: $args) {
    ban(reason: $reason, expireAt: $expireAt)
  }
}
`
export const UnbanStore = gql`
query GetStore($args: [StoreArgs!]!) {
  getStore(args: $args) {
    unBan
  }
}
`
export const RemoveStore = gql`
query GetStore($args: [StoreArgs!]!) {
  getStore(args: $args) {
    remove
  }
}
`
export const CreateMachineFromGetStores = gql`
query GetStore($args: [StoreArgs!]!, $code: String!, $price: Int, $name: String, $description: String) {
  getStore(args: $args) {
    createMachine(code: $code, price: $price, name: $name, description: $description) 
  }
}
`

// ========================= MACHINES =========================
export const GetMachine = gql`
query GetMachine($args: [MachineArgs!]!) {
  getMachine(args: $args) {
    id
    uuid
    code
    price
    name
    description
    qrCode
    status {
      id
      description
      name
    }
    connStatus
  }
}
`
export const UpdateMachine = gql`
query GetMachine($args: [MachineArgs!]!, $price: Float, $name: String, $description: String, $statusId: EUpdateStoreMachineStatus) {
  getMachine(args: $args) {
    update(price: $price, name: $name, description: $description, statusId: $statusId)
  }
}
`

export const BanMachine = gql`
query GetMachine($args: [MachineArgs!]!, $expireAt: Int, $reason: String!) {
  getMachine(args: $args) {
    ban(expireAt: $expireAt, reason: $reason)
  }
}
`
export const UnBanMachine = gql`
query GetMachine($args: [MachineArgs!]!) {
  getMachine(args: $args) {
    unBan
  }
}
`
export const RemoveMachine = gql`
query GetMachine($args: [MachineArgs!]!) {
  getMachine(args: $args) {
    remove
  }
}
`

// ========================= BILLBOARDS =========================
export const GetBillboardList = gql`
query ManagerGetBillboards($args: [BrandArgs!]!) {
  getBrand(args: $args) {
    managerGetBillboards {
      id
      title
      content
      description
      startAt
      endAt
      status {
        id
        description
        name
      }
    }
  }
}
`
export const CreateBillboard = gql`
query GetBrand($args: [BrandArgs!]!, $title: String!, $content: String!, $description: String, $endAt: Int, $startAt: Int!) {
  getBrand(args: $args) {
    createBillboard(title: $title, content: $content, description: $description, endAt: $endAt, startAt: $startAt)
  }
}
`
export const GetBillboard = gql`
query GetBillboard($args: [BillboardArgs!]!) {
  getBillboard(args: $args) {
    id
    title
    content
    description
    startAt
    endAt
    status {
      id
      description
      name
    name
    }
    images {
      image
    }
  }
}
`
export const UpdateBillboard = gql`
query GetBillboard($args: [BillboardArgs!]!, $title: String, $content: String, $description: String, $startAt: Int, $endAt: Int, $statusId: EUpdateBrandBillboardStatus) {
  getBillboard(args: $args) {
    update(title: $title, content: $content, description: $description, startAt: $startAt, endAt: $endAt, statusId: $statusId)
  }
}
`

export const BanBillboard = gql`
query GetBillboard($reason: String!, $args: [BillboardArgs!]!, $expireAt: Int) {
  getBillboard(args: $args) {
    ban(reason: $reason, expireAt: $expireAt)
  }
}
`
export const UnbanBillboard = gql`
query GetBillboard($args: [BillboardArgs!]!) {
  getBillboard(args: $args) {
    unBan
  }
}
`
export const RemoveBillboard = gql`
query GetBillboard($args: [BillboardArgs!]!) {
  getBillboard(args: $args) {
    remove
  }
}
`


// ========================= NOTIFICATIONS =========================
export const ManagerGetAllNotificationSchedules = gql`
query ManagerGetAllNotificationSchedules {
  managerGetAllNotificationSchedules {
    id
    triggerAt
    comment
    status {
      id
      description
      name
    }
    notification {
      id
      title
      content
      type {
        id
        name
      }
      expireAt
    }
  }
}
`
export const DeleteNotification = gql`
query ManagerGetNotificationSchedules($ids: [ID!]!) {
  managerGetNotificationSchedules(ids: $ids) {
    delete
  }
}
`


// ========================= FREE COINS =========================
// ini dipake buat dapetin semua free coin yang udah dikirim
// tapi disini dapet systemFree || brand dan ini dipake buat separasi 
// liat notion buat details
export const GetSentFreeCoinsList = gql`
query ManagerGetAllNotificationSchedules($onlyRewardType: ERewardType) {
  managerGetAllNotificationSchedules(onlyRewardType: $onlyRewardType) {
    id
    triggerAt
    createdAt
    comment
    notification {
      id
      title
      content
      expireAt
      reward {
        id
        content {
          ... on CurrencyReward {
            id
            amount
            currency {
              id
              name
              createdAt
              type {
                id
                description
                name
              }
            }
          }
        }
        limit
        status {
          id
          description
          name
        id
          description
          name
        }
        sourceType {
          id
          description
          name
        }
        endAt
        startAt
        description
        receiveDaysOverdue
      }
    }
    status {
      id
      description
      name
    }
  }
}
`

export const ManagerCreateCurrencyReward = gql`
mutation ManagerCreateCurrencyReward($currencyId: String!, $sourceType: EManagerCreateRewardSourceType!, $startAt: Int!, $limit: Int, $description: String, $endAt: Int, $comment: String!, $notification: ManagerCreateNotificationField!, $triggerAt: Int, $receiveDaysOverdue: Int!, $amount: Int!) {
  managerCreateCurrencyReward(currencyId: $currencyId, sourceType: $sourceType, startAt: $startAt, limit: $limit, description: $description, endAt: $endAt, receiveDaysOverdue: $receiveDaysOverdue, amount: $amount) {
    id
    managerCreateNotificationScheduleToAllMember(comment: $comment, notification: $notification, triggerAt: $triggerAt)
  }
}
`

// ========================= ADS =========================
export const GetAdsList = gql`
query ManagerGetAdvertisements {
  managerGetAdvertisements {
    id
    image
    url
    description
    startAt
    endAt
    status {
      id
      description
      name
    }
    type {
      id
      description
      name
    }
  }
}
`

export const GetAds = gql`
query GetAdvertisement($args: [AdvertisementArgs!]!) {
  getAdvertisement(args: $args) {
    id
    image
    url
    description
    startAt
    endAt
    status {
      id
      description
      name
    }
    type {
      id
      description
      name
    }
  }
}
`
export const UpdateAds = gql`
query GetAdvertisement($args: [AdvertisementArgs!]!, $image: String, $url: String, $description: String, $startAt: Int, $endAt: Int, $statusId: EUpdateAdvertisementStatus) {
  getAdvertisement(args: $args) {
    update(image: $image, url: $url, description: $description, startAt: $startAt, endAt: $endAt, statusId: $statusId)
  }
}
`

export const BanAds = gql`
query GetAdvertisement($args: [AdvertisementArgs!]!, $reason: String!, $expireAt: Int) {
  getAdvertisement(args: $args) {
    ban(reason: $reason, expireAt: $expireAt)
  }
}
`

export const UnbanAds = gql`
query GetAdvertisement($args: [AdvertisementArgs!]!) {
  getAdvertisement(args: $args) {
    unBan
  }
}
`
export const RemoveAds = gql`
query GetAdvertisement($args: [AdvertisementArgs!]!) {
  getAdvertisement(args: $args) {
    remove
  }
}
`
