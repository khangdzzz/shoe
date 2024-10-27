export interface Address {
  companyPostCode: string;
  companyAddress: string;
  phoneNumber: string;
}

export interface Person {
  picFamilyName: string;
  picFamilyNameKana: string;
  picGivenName: string;
  picGivenNameKana: string;
  picPosition: string;
}

export interface FrontPerson {
  frontPicFamilyName: string;
  frontPicFamilyNameKana: string;
  frontPicGivenName: string;
  frontPicGivenNameKana: string;
  frontPicPosition: string;
}

export interface KaipokeDetails {
  kaipokeUserId: string;
  kaipokeUserPassword: string;
  kaipokeCompanyId: string;
  kaigoSoftware: number;
}

export interface Credentials {
  email: string;
  password?: string;
}

export interface RegisterInfo {
  registerReason: string;
  paymentMethod: string;
}

export interface RegisterNewUser extends Address, Person, FrontPerson, KaipokeDetails, Credentials, RegisterInfo {
  companyName: string;
  companyNameKana: string;
  confirmPassword: string;
  verifyToken: string;
  terms: string;
}

export interface Company extends Address, Person, FrontPerson, KaipokeDetails, RegisterInfo {
  id: number;
  companyName: string;
  companyNameKana: string;
  createdAt: string;
  updatedAt: string;
  status: number;
}

export interface CompanyUpdateBody extends Address, Person, FrontPerson, KaipokeDetails, Credentials {
  companyName: string;
  companyNameKana: string;
  paymentMethod: string;
}
