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
