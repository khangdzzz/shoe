export interface RegisterNewUser {
  email: string;
  companyName: string;
  companyNameKana: string;
  companyPostCode: string;
  companyAddress: string;
  frontPicPosition: string;
  frontPicFamilyName: string;
  frontPicGivenName: string;
  frontPicFamilyNameKana: string;
  frontPicGivenNameKana: string;
  picPosition: string;
  picFamilyName: string;
  picGivenName: string;
  picFamilyNameKana: string;
  picGivenNameKana: string;
  phoneNumber: string;
  kaigoSoftware: number;
  kaipokeCompanyId: string;
  kaipokeUserId: string;
  kaipokeUserPassword: string;
  registerReason: string;
  paymentMethod: string;
  password: string;
  confirmPassword: string;
  verifyToken: string;
  terms: string;
}

export interface Company {
   id: number;
    companyName: string;
    companyNameKana: string;
    companyPostCode: string;
    companyAddress: string;
    phoneNumber: string;
    picFamilyName: string;
    picFamilyNameKana: string;
    picGivenName: string;
    picGivenNameKana: string;
    picPosition: string;
    frontPicFamilyName: string;
    frontPicFamilyNameKana: string;
    frontPicGivenName: string;
    frontPicGivenNameKana: string;
    frontPicPosition: string;
    kaipokeUserId: string;
    kaipokeUserPassword: string;
    kaipokeCompanyId: string;
    kaigoSoftware: number;
    paymentMethod: number;
    registerReason: string;
    createdAt: string;
    updatedAt: string;
    status: number;
}
