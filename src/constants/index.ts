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
  COMMON_SETTING: '/admin/common-setting',
  USER_SEARCH: 'setting-user/search',
  USER_EDIT: 'setting-user/edit',
  INVOICE: '/invoice-approval',
  JOURNAL_VOUCHER: '/journal-voucher',
  MASTER_SETTINGS: '/master-settings',
  PAYMENTS: '/payments',
  USER_REGISTER: 'setting-user/user-register',
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
  ELECTRIC_EQUIPMENT_USER: 'electric-equipment-user',
  LIST_GAS_USER: 'list-gas',
  NEW_ELECTRICS: 'new-electric',
  NEW_GAS: 'new-gas',
  EDIT_ELECTRICS: 'edit-electric',
  EDIT_GAS: 'edit-gas',
  USER_SEARCH: 'search',
  USER_EDIT: 'edit',
  INVOICE: 'invoice-approval',
  JOURNAL_VOUCHER: 'journal-voucher',
  MASTER_SETTINGS: 'master-settings',
  USER_MASTER: 'user-master',
  USER_ROLE_MASTER: 'user-role-master',
  BENEFICIARY_MASTER: 'beneficiary-master',
  PAYMENTS: 'payments',
  USER_REGISTER: 'user-register',
  COMMON_SETTING: 'common-setting',
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
  USER_REGISTER: ROUTER_NAME.USER_REGISTER,
  USER_SEARCH: ROUTER_NAME.USER_SEARCH,
  USER_EDIT: ROUTER_NAME.USER_EDIT,
  COMMON_SETTING: ROUTER_NAME.COMMON_SETTING,
  GAS_APPLIANCES: ROUTER_NAME.GAS_APPLIANCES,
  DEVICE_DETAIL: 'device-detail',
  DEVICE_NEW: 'new',
  LIST_POWER_COMPANIES: ROUTER_NAME.LIST_POWER_COMPANIES,
  POWER_COMPANY_DETAIL: ROUTER_NAME.POWER_COMPANY_DETAIL,
  ELECTRIC_EQUIPMENT: ROUTER_NAME.ELECTRIC_EQUIPMENT
}

//check all route run after adjust this object
export const PATH_NAME_JP = {
  ADMIN: '管理者メニュー',
  SETTING_USER: '管理者メニュー',
  USER_REGISTER: '新規ユーザー登録',
  USER_SEARCH: 'ユーザー検索',
  USER_EDIT: 'ユーザー情報編集',
  COMMON_SETTING: '共通設定登録',
  GAS_APPLIANCES: 'ガス機器一覧',
  DEVICE_DETAIL_GAS_APP: 'ガス機器編集',
  DEVICE_DETAIL_ELECTRIC: '電気機器編集',
  DEVICE_DETAIL_GAS_APP_NEW: 'ガス機器登録',
  DEVICE_DETAIL_ELECTRIC_NEW: '電気機器登録',
  LIST_POWER_COMPANIES: '電力会社一覧',
  POWER_COMPANY_DETAIL: '電力料金設定編集',
  ELECTRIC_EQUIPMENT: '電気機器一覧'
}
export const SCREEN_NAME = {
  ADMIN: '管理者メニュー',
  SETTING_USER: 'ユーザー登録・編集',
  USER_REGISTER: '新規ユーザー登録',
  USER_SEARCH: 'ユーザー検索',
  USER_EDIT: 'ユーザー情報編集',
  COMMON_SETTING: '共通設定登録',
  GAS_APPLIANCES: 'ガス機器一覧',
  DEVICE_DETAIL_GAS_APP: 'ガス機器編集',
  DEVICE_DETAIL_ELECTRIC: '電気機器編集',
  DEVICE_DETAIL_GAS_APP_NEW: 'ガス機器登録',
  DEVICE_DETAIL_ELECTRIC_NEW: '電気機器登録',
  LIST_POWER_COMPANIES: '電力会社一覧',
  POWER_COMPANY_DETAIL: 'NAME OF COMPANY WHEN CLICK AN ITEM',
  ELECTRIC_EQUIPMENT: '電気機器一覧'
}

// re set item by router after build interface
export const MENU_ITEMS_PATH = {
  USER_SETTINGS: ROUTER_PATH.SETTING_USER,
  COMMON_SETTINGS: ROUTER_PATH.COMMON_SETTING,
  NEW_USER_REGISTRATION: ROUTER_PATH.SETTING_USER + '/user-register',
  USER_SEARCH: ROUTER_PATH.SETTING_USER + '/search',
  ELECTRICAL_EQUIPMENT: ROUTER_PATH.COMMON_SETTING + '/electric-equipment',
  LIST_POWER_COMPANIES: ROUTER_PATH.COMMON_SETTING + '/list-power-companies',
  GAS_APPLIANCES: ROUTER_PATH.COMMON_SETTING + '/gas-appliances'
}

export const MENU_ITEMS_NAME = {
  USER_SETTINGS: SCREEN_NAME.SETTING_USER,
  COMMON_SETTINGS: SCREEN_NAME.COMMON_SETTING,
  NEW_USER_REGISTRATION: SCREEN_NAME.USER_REGISTER,
  USER_SEARCH: SCREEN_NAME.USER_SEARCH,
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

export const LIST_POWER_COMPANIES = {
  1: '北海道',
  2: '東北',
  3: '東京',
  4: '中部',
  5: '北陸',
  6: '関西',
  7: '四国',
  8: '中国',
  9: '九州'
}
