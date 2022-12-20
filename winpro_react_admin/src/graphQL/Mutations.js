import { gql } from "@apollo/client";

export const Login = gql`
mutation Login($phone: PhoneInput!, $password: String!, $deviceCode: String!, $firebaseToken: String!) {
  login(phone: $phone, password: $password, deviceCode: $deviceCode, firebaseToken: $firebaseToken)
}
`
export const SendVerificationCode = gql`
mutation SendVerificationCode($phone: PhoneInput!, $type: EVerificationCodeType!) {
  sendVerificationCode(phone: $phone, type: $type) 
}
`
export const GetStoresByCoordinate = gql`
query GetStoresByCoordinate($coordinate: CoordinateInput!) {
  getStoresByCoordinate(coordinate: $coordinate) {
    id
    name
    brand {
      id  
    }
  }
}
`


// Brands
export const CreateBrand = gql`
mutation CreateBrand($name: String!, $vatNumber: String!, $principal: CreateBrandPrincipalArgs!, $intro: String, $currencyName: String) {
  createBrand(name: $name, vatNumber: $vatNumber, principal: $principal, intro: $intro, currencyName: $currencyName) {
    id
    name
  }
}
`
export const RemoveBrand = gql`
mutation RemoveBrand($brandId: ID!, $statusId: ERemoveBrandStatus!) {
  removeBrand(brandId: $brandId, statusId: $statusId)
}
`

export const UpdateBrand = gql`
mutation UpdateBrand($brandId: ID!, $name: String, $vatNumber: String, $intro: String, $currencyName: String, $principal: UpdateBrandPrincipalArgs, $statusId: EUpdateBrandStatus) {
  updateBrand(brandId: $brandId, name: $name, vatNumber: $vatNumber, intro: $intro, currencyName: $currencyName, principal: $principal, statusId: $statusId) {
    id
    name
  }
}
`

export const BannedBrand = gql`
mutation BannedBrand($brandId: ID!, $statusId: EBannedBrandStatus!) {
  bannedBrand(brandId: $brandId, statusId: $statusId) {
    id
    name
  }
}
`

// Stores
export const CreateStore = gql`
mutation CreateStore($brandId: ID!, $name: String!, $location: CreateStoreLocationArgs!, $principal: CreateStorePrincipalArgs!, $intro: String) {
  createStore(brandId: $brandId, name: $name, location: $location, principal: $principal, intro: $intro) {
    id
    name
  }
}
`

export const UpdateStore = gql`
mutation UpdateStore($storeId: ID!, $name: String, $intro: String, $location: UpdateStoreLocationArgs, $principal: UpdateStorePrincipalArgs, $statusId: EUpdateStoreStatus) {
  updateStore(storeId: $storeId, name: $name, intro: $intro, location: $location, principal: $principal, statusId: $statusId) {
    id
    name
  }
}
`

export const BannedStore = gql`
mutation BannedStore($storeId: ID!, $statusId: EBannedStoreStatus!) {
  bannedStore(storeId: $storeId, statusId: $statusId) {
    id
    name
  }
}
`
export const RemoveStore = gql`
mutation RemoveStore($storeId: ID!, $statusId: ERemoveStoreStatus!) {
  removeStore(storeId: $storeId, statusId: $statusId)
}
`