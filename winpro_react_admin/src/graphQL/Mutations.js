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

// Brands
export const CreateBrand = gql`
mutation CreateBrand($name: String!, $vatNumber: String!, $principal: CreateBrandPrincipalArgs!, $intro: String, $currencyName: String) {
  createBrand(name: $name, vatNumber: $vatNumber, principal: $principal, intro: $intro, currencyName: $currencyName) {
    id
    name
  }
}
`

