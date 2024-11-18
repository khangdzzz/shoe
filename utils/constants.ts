export const TYPE_MESSAGE = {
  error: 1,
  success: 2
};

export const ROLES = {
  admin: 1,
  user: 0
};

export const ROUTES_USER = ['/mypage', '/user-list'];

export const ROUTES_ADMIN = ['/customer', '/customer/detail'];

export const LOCAL_STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  role: 'role'
};

export const ACTION_EXPORT = {
  REPORT: 'report',
  PLAN: 'plan',
  PLAN_AND_REPORT: 'both'
};

export const SORT = {
  ASC: 'asc',
  DESC: 'desc'
};

export const MESSAGES: { [key: string]: string } = {
  EMPTY: 'データがありません',
  ERR001: '{項目名}を入力してください', // field required
  ERR002: '{項目名}を選択してください',
  ERR003: '利用規約をご確認の上、利用規約確認をチェックしてください。',
  ERR004: 'メールアドレス形式で入力してください', // email format
  ERR005: 'フリガナで入力してください	', // katakana
  ERR006: 'パスワードが一致していません', // password not match
  ERR007: '半角英数記号を8文字以上入力してください' // password format,
};

export const FIELDS = {
  companyName: '法人名',
  companyNameKana: 'フリガナ',
  companyPostCode: '郵便番号',
  companyAddress: '会社所在地',
  frontPicPosition: '代表者役職',
  frontPicFamilyName: '代表者お名前_姓',
  frontPicGivenName: '代表者お名前_名',
  frontPicFamilyNameKana: '代表者お名前_姓カナ',
  frontPicGivenNameKana: '代表者お名前_名カナ',
  picPosition: '担当者役職',
  picFamilyName: '担当者お名前_姓',
  picGivenName: '担当者お名前_名',
  picFamilyNameKana: '担当者お名前_名カナ',
  picGivenNameKana: '担当者お名前_名カナ',
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

export const CHARACTERS = [
  { label: 'あ', selected: false, disabled: false },
  { label: 'い', selected: false, disabled: false },
  { label: 'う', selected: false, disabled: false },
  { label: 'え', selected: false, disabled: false },
  { label: 'お', selected: false, disabled: false },
  { label: 'か', selected: false, disabled: false },
  { label: 'き', selected: false, disabled: false },
  { label: 'く', selected: false, disabled: false },
  { label: 'け', selected: false, disabled: false },
  { label: 'こ', selected: false, disabled: false },
  { label: 'さ', selected: false, disabled: false },
  { label: 'し', selected: false, disabled: false },
  { label: 'す', selected: false, disabled: false },
  { label: 'せ', selected: false, disabled: false },
  { label: 'そ', selected: false, disabled: false },
  { label: 'た', selected: false, disabled: false },
  { label: 'ち', selected: false, disabled: false },
  { label: 'つ', selected: false, disabled: false },
  { label: 'て', selected: false, disabled: false },
  { label: 'と', selected: false, disabled: false },
  { label: 'な', selected: false, disabled: false },
  { label: 'に', selected: false, disabled: false },
  { label: 'ぬ', selected: false, disabled: false },
  { label: 'ね', selected: false, disabled: false },
  { label: 'の', selected: false, disabled: false },
  { label: 'は', selected: false, disabled: false },
  { label: 'ひ', selected: false, disabled: false },
  { label: 'ふ', selected: false, disabled: false },
  { label: 'へ', selected: false, disabled: false },
  { label: 'ほ', selected: false, disabled: false },
  { label: 'ま', selected: false, disabled: false },
  { label: 'み', selected: false, disabled: false },
  { label: 'む', selected: false, disabled: false },
  { label: 'め', selected: false, disabled: false },
  { label: 'も', selected: false, disabled: false },
  { label: 'や', selected: false, disabled: false },
  { label: 'ゆ', selected: false, disabled: false },
  { label: 'よ', selected: false, disabled: false },
  { label: 'ら', selected: false, disabled: false },
  { label: 'り', selected: false, disabled: false },
  { label: 'る', selected: false, disabled: false },
  { label: 'れ', selected: false, disabled: false },
  { label: 'ろ', selected: false, disabled: false },
  { label: 'わ', selected: false, disabled: false },
  { label: 'を', selected: false, disabled: false },
  { label: 'ん', selected: false, disabled: false }
];
