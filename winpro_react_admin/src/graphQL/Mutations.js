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
mutation CreateBrand($name: String!, $vatNumber: String!, $cover: String!, $logo: String!, $principal: CreateBrandPrincipalArgs!, $intro: String, $currencyName: String) {
  createBrand(name: $name, vatNumber: $vatNumber, cover: $cover, logo: $logo, principal: $principal, intro: $intro, currencyName: $currencyName)
}
`

// ADS
export const CreateAdvertisement = gql`
mutation CreateAdvertisement($typeId: EAdvertisementType!, $image: String!, $url: String!, $startAt: Int!, $description: String, $endAt: Int) {
  createAdvertisement(typeId: $typeId, image: $image, url: $url, startAt: $startAt, description: $description, endAt: $endAt)
}
`
// NOTIFICATION
export const CreateSystemNotification = gql`
mutation ManagerSetNotificationScheduleToAllMember($comment: String!, $notification: ManagerCreateNotification!, $triggerAt: Int) {
  managerSetNotificationScheduleToAllMember(comment: $comment, notification: $notification, triggerAt: $triggerAt)
}
`