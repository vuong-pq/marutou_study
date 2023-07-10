export interface FormItem {
  key?: string | number
  label?: string
  type?: string
  placeholder?: string
  options?: any[]
  // SWITCH
  activeLbl?: string
  inactiveLbl?: string
  // DATE RANGE
  rangeSeparator?: string
  startPlaceholder?: string
  endPlaceholder?: string
  // DOUBLE INPUT
  listinput?: any[]
}

export interface FormActions {
  submit?: {
    visible: boolean
    label?: string
    onSuccess?: (fData: any) => void
    onError?: (fields: any) => void
  }
  cancel?: { visible: boolean; label?: string; onCancel?: () => void }
  reset?: { visible: boolean; label?: string }
}

//Admin View
export interface Menu {
  name: string
  to?: string
  data?: Array<MenuNested>
}

export interface MenuNested extends Menu {
  child?: Menu
}

export interface ColumnItem {
  key?: string
  label?: string
  class?: string
  component?: string
  sortable?: boolean
  width?: string
  child?: ColumnItem[]
}

export interface BeneficiaryMaster {
  registeredDT: string
  registeredNA: string
  updatedDT: string
  updatedNA: string
  startDT: string
  invalidDT: string
  beneficiaryType: string
  beneficiaryId: string
  beneficiaryName: string
}

export interface PowerCompany {
  name: string
  title: string
  field1: string
  field2: string
  field3: string
  field4: string
}

export interface PowerCompanyCol {
  prop: string
  label: string
  width?: string
  className?: string
}

export interface MenuDetailAdmin {
  to: string
  icon: string
  name: string
}

export interface Device {
  name: string
  title: string
}

export interface ModalData {
  open: boolean
  type: string
  title: string
  content: string
  okText?: string
  cancelText?: string
  onOk?: Function
}

export interface UserAdmin {
  userId: string
  name?: string
  pass?: string
  company: string
  registration_status?: boolean
  availability?: boolean
  deleteMess?: string
}
