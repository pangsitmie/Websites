import { gql } from "@apollo/client";


// ========================= AUTH =========================
export const GetManagerAccessToken = gql`
query GetManagerAccessToken($refreshToken: String!) {
  getManagerAccessToken(refreshToken: $refreshToken)
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
query GetAllBrands {
  getAllBrands {
    id
    name
    vatNumber
    status {
      name
    }
    principal {
      id
      name
      lineUrl
      email
    }
  }
}
`
export const GetBrandList = gql`
query GetAllBrands {
  getAllBrands {
    id
    name
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
    updateBrand(name: $name, vatNumber: $vatNumber, intro: $intro, currencyName: $currencyName, principal: $principal, statusId: $statusId) {
      id
      name
    }
  }
}
`
export const BanBrand = gql`
query GetBrand($args: [BrandArgs!]!, $expireAt: Int, $reason: String!) {
  getBrand(args: $args) {
    banBrand(expireAt: $expireAt, reason: $reason)
  }
}
`
export const RemoveBrand = gql`
query GetBrand($args: [BrandArgs!]!) {
  getBrand(args: $args) {
    removeBrand
  }
}
`

//========================= STORES =========================
export const GetAllStores = gql`
query GetAllStores {
  getAllStores {
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
      city
      district
      address
      storeId
    }
  }
}
`

export const GetStore = gql`
query GetStore($args: [Args!]!) {
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
    machines {
      uuid
      code
      price
      name
      description
    }
  }
}
`
export const CreateStore = gql`
query GetBrand($args: [BrandArgs!]!, $name: String!, $location: CreateStoreLocationArgs!, $principal: CreateStorePrincipalArgs!, $intro: String) {
  getBrand(args: $args) {
    createStore(name: $name, location: $location, principal: $principal, intro: $intro) {
      id
      name
    }
  }
}
`

export const UpdateStore = gql`
query GetStore($args: [Args!]!, $name: String, $intro: String, $location: UpdateStoreLocationArgs, $principal: UpdateStorePrincipalArgs, $statusId: EUpdateStoreStatus) {
  getStore(args: $args) {
    updateStore(name: $name, intro: $intro, location: $location, principal: $principal, statusId: $statusId) {
      id
      name
    }
  }
}
`
export const BanStore = gql`
query GetStore($args: [Args!]!, $reason: String!, $expireAt: Int) {
  getStore(args: $args) {
    banStore(reason: $reason, expireAt: $expireAt)
  }
}
`
export const RemoveStore = gql`
query GetStore($args: [Args!]!) {
  getStore(args: $args) {
    removeStore
  }
}
`
export const CreateMachineFromGetStores = gql`
query GetStore($args: [Args!]!, $code: String!, $price: Int, $name: String, $description: String) {
  getStore(args: $args) {
    createMachine(code: $code, price: $price, name: $name, description: $description) {
      uuid
      code
    }
  }
}
`


export const GetAccessToken = gql`
query getAccessToken($refreshToken: String!) {
  getAccessToken(refreshToken: $refreshToken)
}
`
// export const GetStoresByCoordinate = gql`
// query Brand($coordinate: CoordinateInput!) {
//   getStoresByCoordinate(coordinate: $coordinate) {
//     brand {
//       id
//       name
//       lineUrl
//       cover
//       intro
//       logo
//       email
//       createdAt
//     }
//   }
// }
// `
