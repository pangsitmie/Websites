import { gql } from "@apollo/client";

// export const GetUsers = gql`

// `

// export const GetStoresByCoordinate = gql`
// query GetStoresByCoordinate($coordinate: CoordinateInput!) {
//   getStoresByCoordinate(coordinate: $coordinate) {
//     id
//     name
//     brand {
//       id  
//     }
//   }
// }
// `
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

export const GetAllStores = gql`
query GetAllStores($limit: Int!, $offset: Int!) {
  getAllStores(limit: $limit, offset: $offset) {
    id
    name
    cover
    intro
    createdAt
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
      address
      description
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
