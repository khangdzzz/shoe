export const TYPE_MESSAGE = {
  error: 1,
  success: 2
};

export const ROLES = {
  admin: 1,
  user: 0
};

export const ROUTES_USER = ['/mypage', '/user-list'];

export const ROUTES_ADMIN = ['/customer', '/customer/detail', '/customer/create-new-customer'];

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
  ERR007: '半角英数記号を8文字以上入力してください', // password format,
  ERR008: '支払い処理に失敗しました。もう一度お試しください。', // payment -> failure to get sb param
  ERR009: 'お支払い方法のキャンセルに失敗しました。もう一度お試しください。', // payment -> failure to cancel
  ERR010: '支払い登録に失敗しました。もう一度お試しください。', // payment -> failure to register
  INFO001: 'お支払い方法のキャンセルが完了しました。', // payment -> cancel success
  INFO002: 'お支払い方法の登録が完了しました' // payment -> success
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
  { label: 'あ', label2: 'ア', selected: false, disabled: true },
  { label: 'い', label2: 'イ', selected: false, disabled: true },
  { label: 'う', label2: 'ウ', selected: false, disabled: true },
  { label: 'え', label2: 'エ', selected: false, disabled: true },
  { label: 'お', label2: 'オ', selected: false, disabled: true },
  { label: 'か', label2: 'カ', selected: false, disabled: true },
  { label: 'き', label2: 'キ', selected: false, disabled: true },
  { label: 'く', label2: 'ク', selected: false, disabled: true },
  { label: 'け', label2: 'ケ', selected: false, disabled: true },
  { label: 'こ', label2: 'コ', selected: false, disabled: true },
  { label: 'さ', label2: 'サ', selected: false, disabled: true },
  { label: 'し', label2: 'シ', selected: false, disabled: true },
  { label: 'す', label2: 'ス', selected: false, disabled: true },
  { label: 'せ', label2: 'セ', selected: false, disabled: true },
  { label: 'そ', label2: 'ソ', selected: false, disabled: true },
  { label: 'た', label2: 'タ', selected: false, disabled: true },
  { label: 'ち', label2: 'チ', selected: false, disabled: true },
  { label: 'つ', label2: 'ツ', selected: false, disabled: true },
  { label: 'て', label2: 'テ', selected: false, disabled: true },
  { label: 'と', label2: 'ト', selected: false, disabled: true },
  { label: 'な', label2: 'ナ', selected: false, disabled: true },
  { label: 'に', label2: 'ニ', selected: false, disabled: true },
  { label: 'ぬ', label2: 'ヌ', selected: false, disabled: true },
  { label: 'ね', label2: 'ネ', selected: false, disabled: true },
  { label: 'の', label2: 'ノ', selected: false, disabled: true },
  { label: 'は', label2: 'ハ', selected: false, disabled: true },
  { label: 'ひ', label2: 'ヒ', selected: false, disabled: true },
  { label: 'ふ', label2: 'フ', selected: false, disabled: true },
  { label: 'へ', label2: 'ヘ', selected: false, disabled: true },
  { label: 'ほ', label2: 'ホ', selected: false, disabled: true },
  { label: 'ま', label2: 'マ', selected: false, disabled: true },
  { label: 'み', label2: 'ミ', selected: false, disabled: true },
  { label: 'む', label2: 'ム', selected: false, disabled: true },
  { label: 'め', label2: 'メ', selected: false, disabled: true },
  { label: 'も', label2: 'モ', selected: false, disabled: true },
  { label: 'や', label2: 'ヤ', selected: false, disabled: true },
  { label: 'ゆ', label2: 'ユ', selected: false, disabled: true },
  { label: 'よ', label2: 'ヨ', selected: false, disabled: true },
  { label: 'ら', label2: 'ラ', selected: false, disabled: true },
  { label: 'り', label2: 'リ', selected: false, disabled: true },
  { label: 'る', label2: 'ル', selected: false, disabled: true },
  { label: 'れ', label2: 'レ', selected: false, disabled: true },
  { label: 'ろ', label2: 'ロ', selected: false, disabled: true },
  { label: 'わ', label2: 'ワ', selected: false, disabled: true },
  { label: 'を', label2: 'ヲ', selected: false, disabled: true },
  { label: 'ん', label2: 'ン', selected: false, disabled: true }
];
