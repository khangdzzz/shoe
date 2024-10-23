export const TYPE_MESSAGE = {
  error: 1,
  success: 2
}

export const MESSAGES: { [key: string]: string } = {
  notEmpty: 'This field is required',
  invalidEmail: 'メールアドレスを入力してください。',
  ERR001: '{項目名}を入力してください', // field required
  ERR004: 'メールアドレス形式で入力してください', // email format
  ERR006: 'パスワードが一致していません', // password not match
  ERR007: '半角英数記号を8文字以上入力してください' // password format
};

export const FIELDS = {
  companyName: '法人名',
  companyNameKana: 'フリガナ',
  companyPostCode: '郵便番号',
  companyAddress: '会社所在地',
  frontPicPosition: '代表者役職',
  frontPicFamilyName: '代表者お名前_姓',
  frontPicGiveName: '代表者お名前_名',
  frontPicFamilyNameKana: '代表者お名前_姓カナ',
  frontPicGiveNameKana: '代表者お名前_名カナ',
  picPosition: '担当者役職',
  picFamilyName: '担当者お名前_姓',
  picGiveName: '担当者お名前_名',
  picFamilyNameKana: '担当者お名前_名カナ',
  picGiveNameKana: '担当者お名前_名カナ',
  phoneNumber: '電話番号',
  email: 'メールアドレス',
  password: 'パスワード',
  confirmPassword: 'パスワード確認用',
  kaigoSoftware: '介護ソフト',
  kaipokeCompanyId: 'カイポケ法人ID',
  kaipokeUserId: 'カイポケユーザーID',
  kaipokeUserPassword: 'カイポケパスワード',
  registerReason: 'ご登録の切っ掛け',
  paymentMethod: '決済方法',
  terms: '利用規約',
  term: '利用規約確認'
};
