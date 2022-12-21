import { gql } from "@apollo/client";

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
query GetMember($params: [MemberArgs!]!, $reason: String!) {
  getMember(params: $params) {
    id
    status {
      name
    }
    ban(reason: $reason)
  }
}
`

export const UnbanMember = gql`
query GetMember($params: [MemberArgs!]!, $reason: String!) {
  getMember(params: $params) {
    id
    status {
      name
    }
    unban(reason: $reason)
  }
}
`

export const GetStoresByCoordinate = gql`
query GetStoresByCoordinate($coordinate: CoordinateInput!) {
  getStoresByCoordinate(coordinate: $coordinate) {
    id
    name
    brand {
      id
      name
    }
    createdAt
    cover
    intro
    location {
      address
      description
    }
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
// Brand
export const GetAllBrands = gql`
query GetAllBrands {
  getAllBrands {
    id
    name
    vatNumber
    cover
    intro
    logo
    createdAt
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
    }
    currency {
      name
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
// Store
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

export const CreateMachineFromGetStores = gql`
query GetStore($args: [Args!]!, $storeId: ID!, $code: String!, $price: Int, $name: String, $description: String) {
  getStore(args: $args) {
    createMachine(storeId: $storeId, code: $code, price: $price, name: $name, description: $description) {
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
