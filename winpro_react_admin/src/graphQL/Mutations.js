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