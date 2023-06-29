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
