export const ROUTER_PATH = {
  LOGIN: '/login',
  ADMIN: '/admin',
  USER: '/',
  USER_SETTING: '/user-setting',
  SETTING_USER: '/admin/setting-user',
  COMMON_SETTING: '/admin/common-setting',
  USER_SEARCH: 'setting-user/search',
  INVOICE: '/invoice-approval',
  JOURNAL_VOUCHER: '/journal-voucher',
  MASTER_SETTINGS: '/master-settings',
  PAYMENTS: '/payments',
  USER_REGISTER: 'setting-user/user-register',
  POWER_COMPANY: 'common-setting/power-companies',
  ELECTRIC_EQUIPMENT: 'common-setting/electric-equipment',
  GAS_APPLIANCES: 'common-setting/gas-appliances',
  POWER_COMPANY_DETAIL: ':companyName'
}

export const ROUTER_NAME = {
  LOGIN: 'login',
  ADMIN: 'admin',
  USER: 'main',
  USER_SETTING: 'user-setting',
  SETTING_USER: 'setting-user',
  USER_SEARCH: 'search',
  INVOICE: 'invoice-approval',
  JOURNAL_VOUCHER: 'journal-voucher',
  MASTER_SETTINGS: 'master-settings',
  USER_MASTER: 'user-master',
  USER_ROLE_MASTER: 'user-role-master',
  BENEFICIARY_MASTER: 'beneficiary-master',
  PAYMENTS: 'payments',
  USER_REGISTER: 'user-register',
  COMMON_SETTING: 'common-setting',
  POWER_COMPANY: 'power-company',
  ELECTRIC_EQUIPMENT: 'electric-equipment',
  POWER_COMPANY_DETAIL: 'power-company-detail',
  GAS_APPLIANCES: 'gas-appliances'
}

export const MENU_ITEMS_PATH = {
  USER_SETTINGS: '/admin/setting-user',
  COMMON_SETTINGS: '/admin/common-setting',
  NEW_USER_REGISTRATION: '/admin/setting-user/user-register',
  USER_SEARCH: '/admin/setting-user/search',
  POWER_COMPANY: '/admin/common-setting/power-companies',
  ELECTRICAL_EQUIPMENT: '/admin/common-setting/electric-equipment',
  GAS_APPLIANCES: '/admin/common-setting/gas-appliances'
}

export const MENU_ITEMS_NAME = {
  USER_SETTINGS: 'User registration/Edit',
  COMMON_SETTINGS: 'Common setting registration',
  NEW_USER_REGISTRATION: 'New user registration',
  USER_SEARCH: 'User search',
  POWER_COMPANY: 'List of power companies',
  ELECTRICAL_EQUIPMENT: 'Electrical equipment list',
  GAS_APPLIANCES: 'List of gas appliances'
}

export const MASTER_SETTINGS_ROUTER_PATH = {
  USER: ROUTER_PATH.MASTER_SETTINGS + '/user',
  USER_ROLE: ROUTER_PATH.MASTER_SETTINGS + '/user-role',
  BENEFICIARY: ROUTER_PATH.MASTER_SETTINGS + '/beneficiary',
  APPROVAL_ROUTE: ROUTER_PATH.MASTER_SETTINGS + '/approval-route',
  DOCUMENT_TYPE: ROUTER_PATH.MASTER_SETTINGS + '/document-type',
  MONTHLY_EXCHANGE_RATE: ROUTER_PATH.MASTER_SETTINGS + '/monthly-exchange-rate',
  RATIO_ALLOCATION: ROUTER_PATH.MASTER_SETTINGS + '/ratio-allocation'
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
