export const ROUTER_PATH = {
  LOGIN: '/login',
  ADMIN: '/admin',
  USER: '/',
  USER_SETTING: '/user-setting',
  SIMULATOR: '/simulator',
  SEARCH_SIMULATOR: '/search-simulator',
  ELECTRIC_EQUIPMENT_USER: '/user-setting/electric-equipment',
  LIST_GAS_USER: '/user-setting/list-gas',
  NEW_ELECTRICS: '/user-setting/electric-equipment/new-electric',
  NEW_GAS: '/user-setting/list-gas/new-gas',
  EDIT_ELECTRICS: '/user-setting/electric-equipment/edit-electric',
  EDIT_GAS: '/user-setting/list-gas/edit-gas',
  SETTING_USER: '/admin/setting-user',
  SETTING_ADMIN_USER: '/admin/setting-admin-user',
  ADMIN_USER_REGISTER: 'setting-admin-user/register',
  COMMON_SETTING: '/admin/common-setting',
  GAS_PRICE: '/admin/gas-price',
  USER_SEARCH: 'setting-user/search',
  USER_ADMIN_SEARCH: 'setting-admin-user/search',
  USER_EDIT: 'setting-user/edit',
  USER_ADMIN_EDIT: 'setting-admin-user/edit',
  USER_LIST: 'setting-user/list',
  USER_ADMIN_LIST: 'setting-admin-user/list',
  USER_DELETE: 'setting-user/delete',
  USER_ADMIN_DELETE: 'setting-admin-user/delete',
  USER_REGISTER: 'setting-user/register',
  USER_ADMIN_REGISTER: 'setting-admin-user/register',
  LIST_POWER_COMPANIES: 'common-setting/list-power-companies',
  ELECTRIC_EQUIPMENT: 'common-setting/electric-equipment',
  DEVICE_DETAIL: 'device-detail',
  DEVICE_NEW: 'new',
  GAS_APPLIANCES: 'common-setting/gas-appliances',
  POWER_COMPANY_DETAIL: 'company-detail'
}

export const ROUTER_NAME = {
  LOGIN: 'login',
  ADMIN: 'admin',
  USER: 'main',
  USER_SETTING: 'user-setting',
  SIMULATOR: 'simulator',
  SEARCH_SIMULATOR: 'search-simulator',
  SETTING_USER: 'setting-user',
  SETTING_ADMIN_USER: 'setting-admin-user',
  ADMIN_USER_REGISTER: 'admin-user-register',
  ELECTRIC_EQUIPMENT_USER: 'electric-equipment-user',
  LIST_GAS_USER: 'list-gas',
  NEW_ELECTRICS: 'new-electric',
  NEW_GAS: 'new-gas',
  EDIT_ELECTRICS: 'edit-electric',
  EDIT_GAS: 'edit-gas',
  USER_SEARCH: 'search',
  USER_ADMIN_SEARCH: 'admin-search',
  USER_EDIT: 'edit',
  USER_ADMIN_EDIT: 'user-admin-edit',
  USER_LIST: 'user-list',
  USER_ADMIN_LIST: 'user-admin-list',
  USER_DELETE: 'user-delete',
  USER_ADMIN_DELETE: 'user-admin-delete',
  USER_REGISTER: 'user-register',
  USER_ADMIN_REGISTER: 'user-admin-register',
  COMMON_SETTING: 'common-setting',
  GAS_PRICE: 'gas-price',
  LIST_POWER_COMPANIES: 'list-power-companies',
  ELECTRIC_EQUIPMENT: 'electric-equipment',
  POWER_COMPANY_DETAIL: 'company-detail',
  DEVICE_DETAIL_ELECTRIC: 'device-detail-electric',
  DEVICE_DETAIL_ELECTRIC_NEW: 'device-detail-electric-new',
  DEVICE_DETAIL_GAS_APP: 'device-detail-gas-app',
  DEVICE_DETAIL_GAS_APP_NEW: 'device-detail-gas-app-new',
  GAS_APPLIANCES: 'gas-appliances'
}
//clone from route path admin?
export const PATH_NAME = {
  ADMIN: ROUTER_NAME.ADMIN,
  SETTING_USER: ROUTER_NAME.SETTING_USER,
  SETTING_ADMIN_USER: ROUTER_NAME.SETTING_ADMIN_USER,
  ADMIN_USER_REGISTER: ROUTER_NAME.ADMIN_USER_REGISTER,
  REGISTER: 'register',
  SEARCH: 'search',
  EDIT: 'edit',
  LIST: 'list',
  DELETE: 'delete',
  COMMON_SETTING: ROUTER_NAME.COMMON_SETTING,
  GAS_PRICE: ROUTER_NAME.GAS_PRICE,
  GAS_APPLIANCES: ROUTER_NAME.GAS_APPLIANCES,
  DEVICE_DETAIL: 'device-detail',
  DEVICE_NEW: 'new',
  LIST_POWER_COMPANIES: ROUTER_NAME.LIST_POWER_COMPANIES,
  POWER_COMPANY_DETAIL: ROUTER_NAME.POWER_COMPANY_DETAIL,
  ELECTRIC_EQUIPMENT: ROUTER_NAME.ELECTRIC_EQUIPMENT,

  LOGIN: ROUTER_NAME.LOGIN,
  USER: ROUTER_NAME.USER,
  USER_SETTING: ROUTER_NAME.USER_SETTING,
  SIMULATOR: ROUTER_NAME.SIMULATOR,
  SEARCH_SIMULATOR: ROUTER_NAME.SEARCH_SIMULATOR,
  ELECTRIC_EQUIPMENT_USER: ROUTER_NAME.ELECTRIC_EQUIPMENT_USER,
  LIST_GAS_USER: ROUTER_NAME.LIST_GAS_USER,
  // NEW_ELECTRICS: ROUTER_NAME.NEW_ELECTRICS,
  // NEW_GAS: ROUTER_NAME.NEW_GAS,
  EDIT_ELECTRICS: ROUTER_NAME.EDIT_ELECTRICS,
  EDIT_GAS: ROUTER_NAME.EDIT_GAS
}

export const PATH_NAME_JP = {
  ADMIN: '管理者メニュー',
  SETTING_USER: '管理者メニュー',
  SETTING_ADMIN_USER: 'Adminユーザー登録・編集',
  ADMIN_USER_REGISTER: '新規Adminユーザー登録',
  USER_REGISTER: '新規ユーザー登録',
  USER_ADMIN_REGISTER: '新規Adminユーザー登録',
  USER_SEARCH: 'ユーザー検索',
  USER_ADMIN_SEARCH: 'Adminユーザー情報編集',
  USER_EDIT: 'ユーザー情報編集',
  USER_ADMIN_EDIT: 'Adminユーザー情報編集',
  USER_LIST: 'ユーザー一覧',
  USER_ADMIN_LIST: 'Adminユーザー一覧',
  USER_DELETE: 'ユーザー情報削除',
  USER_ADMIN_DELETE: 'Adminユーザー情報削除',
  COMMON_SETTING: '共通設定登録',
  GAS_PRICE: 'ガス料金設定',
  GAS_APPLIANCES: 'ガス機器一覧',
  DEVICE_DETAIL_GAS_APP: 'ガス機器編集',
  DEVICE_DETAIL_ELECTRIC: '電気機器編集',
  DEVICE_DETAIL_GAS_APP_NEW: 'ガス機器登録',
  DEVICE_DETAIL_ELECTRIC_NEW: '電気機器登録',
  LIST_POWER_COMPANIES: '電力会社一覧',
  POWER_COMPANY_DETAIL: '電力料金設定編集',
  ELECTRIC_EQUIPMENT: '電気機器一覧',

  LOGIN: 'ログイン',
  USER: '主要',
  USER_SETTING: 'ユーザー設定',
  SIMULATOR: 'シミュレータ',
  SEARCH_SIMULATOR: '検索シミュレータ',
  ELECTRIC_EQUIPMENT_USER: '電気機器ユーザー',
  LIST_GAS_USER: 'リストガス',
  NEW_ELECTRICS: '新しい電気',
  NEW_GAS: '新しいガス',
  EDIT_ELECTRICS: '編集電気',
  EDIT_GAS: '編集ガス'
}
export const SCREEN_NAME = {
  ADMIN: '管理者メニュー',
  SETTING_USER: 'ユーザー登録・編集',
  SETTING_ADMIN_USER: 'Adminユーザー登録・編集',
  ADMIN_USER_REGISTER: '新規Adminユーザー登録',
  USER_REGISTER: '新規ユーザー登録',
  USER_ADMIN_REGISTER: '新規Adminユーザー登録  ',
  USER_SEARCH: 'ユーザー検索',
  USER_ADMIN_SEARCH: 'Adminユーザー情報編集',
  USER_EDIT: 'ユーザー情報編集',
  USER_ADMIN_EDIT: 'Adminユーザー情報編集',
  USER_LIST: 'ユーザー一覧',
  USER_ADMIN_LIST: 'Adminユーザー一覧',
  USER_DELETE: 'ユーザー情報削除',
  USER_ADMIN_DELETE: 'Adminユーザー情報削除',
  COMMON_SETTING: '共通設定登録',
  GAS_PRICE: 'ガス料金設定',
  GAS_APPLIANCES: 'ガス機器一覧',
  DEVICE_DETAIL_GAS_APP: 'ガス機器編集',
  DEVICE_DETAIL_ELECTRIC: '電気機器編集',
  DEVICE_DETAIL_GAS_APP_NEW: 'ガス機器登録',
  DEVICE_DETAIL_ELECTRIC_NEW: '電気機器登録',
  LIST_POWER_COMPANIES: '電力会社一覧',
  POWER_COMPANY_DETAIL: 'NAME OF COMPANY WHEN CLICK AN ITEM',
  ELECTRIC_EQUIPMENT: '電気機器一覧',

  LOGIN: 'ログイン',
  USER: '主要',
  USER_SETTING: 'ユーザー設定',
  SIMULATOR: 'シミュレータ',
  SEARCH_SIMULATOR: '検索シミュレータ',
  ELECTRIC_EQUIPMENT_USER: '電気機器ユーザー',
  LIST_GAS_USER: 'リストガス',
  NEW_ELECTRICS: '新しい電気',
  NEW_GAS: '新しいガス',
  EDIT_ELECTRICS: '編集電気',
  EDIT_GAS: '編集ガス'
}

// re set item by router after build interface
export const MENU_ITEMS_PATH = {
  USER_SETTINGS: ROUTER_PATH.SETTING_USER,
  SETTING_ADMIN_USER: ROUTER_PATH.SETTING_ADMIN_USER,
  ADMIN_USER_REGISTER: ROUTER_PATH.ADMIN_USER_REGISTER,
  COMMON_SETTINGS: ROUTER_PATH.COMMON_SETTING,
  GAS_PRICE: ROUTER_PATH.GAS_PRICE,
  USER_EDIT: ROUTER_PATH.USER_EDIT,
  NEW_USER_REGISTRATION: ROUTER_PATH.SETTING_USER + '/register',
  USER_SEARCH: ROUTER_PATH.SETTING_USER + '/search',
  USER_ADMIN_SEARCH: ROUTER_PATH.SETTING_ADMIN_USER + '/search',
  ELECTRICAL_EQUIPMENT: ROUTER_PATH.COMMON_SETTING + '/electric-equipment',
  LIST_POWER_COMPANIES: ROUTER_PATH.COMMON_SETTING + '/list-power-companies',
  GAS_APPLIANCES: ROUTER_PATH.COMMON_SETTING + '/gas-appliances'
}

export const MENU_ITEMS_NAME = {
  USER_SETTINGS: SCREEN_NAME.SETTING_USER,
  SETTING_ADMIN_USER: SCREEN_NAME.SETTING_ADMIN_USER,
  ADMIN_USER_REGISTER: SCREEN_NAME.ADMIN_USER_REGISTER,
  COMMON_SETTINGS: SCREEN_NAME.COMMON_SETTING,
  GAS_PRICE: SCREEN_NAME.GAS_PRICE,
  NEW_USER_REGISTRATION: SCREEN_NAME.USER_REGISTER,
  USER_SEARCH: SCREEN_NAME.USER_SEARCH,
  USER_ADMIN_SEARCH: SCREEN_NAME.USER_ADMIN_SEARCH,
  USER_EDIT: SCREEN_NAME.USER_EDIT,
  LIST_POWER_COMPANIES: SCREEN_NAME.LIST_POWER_COMPANIES,
  ELECTRICAL_EQUIPMENT: SCREEN_NAME.ELECTRIC_EQUIPMENT,
  GAS_APPLIANCES: SCREEN_NAME.GAS_APPLIANCES
}

export const PUBLIC_PATH = [ROUTER_PATH.LOGIN]

export const FORM_ITEM_TYPE = {
  AUTOCOMPLETE: 'autocomplete',
  CHECKBOX: 'checkbox',
  DATE_PICKER: 'datepicker',
  DATE_RANGE: 'daterange',
  INPUT: 'input',
  INPUT_PASSWORD: 'inputpassword',
  RADIO: 'radio',
  SELECT: 'select',
  SWITCH: 'switch',
  DOUBLE_INPUT: 'doubleinput'
}

export const FORM_ITEM_ELEMENT: { [key: string]: string } = {
  autocomplete: 'el-autocomplete',
  checkbox: 'el-checkbox',
  datepicker: 'el-date-picker',
  daterange: 'el-date-picker',
  input: 'el-input',
  inputpassword: 'el-input',
  radio: 'el-radio',
  select: 'el-select',
  switch: 'el-switch'
}

export const SPECIAL_FORM_TYPE = [
  FORM_ITEM_TYPE.SELECT,
  FORM_ITEM_TYPE.CHECKBOX,
  FORM_ITEM_TYPE.RADIO
]

export const ROLE = {
  ADMIN: 'admin',
  USER: 'user'
}

export const LIST_POWER_COMPANIES = [
  '北海道',
  '東北',
  '東京',
  '中部',
  '北陸',
  '関西',
  '四国',
  '中国',
  '九州'
]

export const LIST_CHECKBOXES_COMPANY = [
  '北海道電力',
  '東北電力',
  '東京電力',
  '中部電力',
  '北陸電力',
  '関西電力',
  '中国電力',
  '四国電力',
  '九州電力'
]

export const MODAL_TYPE = {
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
}

export const REGISTRATION_STATUS = {
  IN_USE: 1,
  DELETED: 2
}

export const FORMAT = {
  YYYY_MM_DD: 'yyyy-mm-dd',
  YYYY_MM_DD_JP: 'yyyy-mm-dd_jp',
  YY_MM: 'yyyy-mm'
}
