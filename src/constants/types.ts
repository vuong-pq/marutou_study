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
  id: string
  name: string
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
