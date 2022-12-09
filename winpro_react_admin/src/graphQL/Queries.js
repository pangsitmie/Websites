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
