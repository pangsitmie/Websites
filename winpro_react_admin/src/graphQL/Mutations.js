import { gql } from "@apollo/client";

export const ManagerLogin = gql`
mutation ManagerLogin($account: String!, $password: String!) {
  managerLogin(account: $account, password: $password)
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

