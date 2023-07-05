import { ref } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
import type { PowerCompany } from '@/constants/types'

const defaultState = {
  name: '',
  title: '',
  field1: '',
  field2: '',
  field3: '',
  field4: ''
}

export const useCompanyStore = defineStore(
  'company',
  () => {
    const powerCompanyDetailData = ref<PowerCompany>({
      ..._.cloneDeep(defaultState)
    })

    const $reset = () => {
      powerCompanyDetailData.value = { ...defaultState }
    }

    const setPowerCompanyDetailData = (params: PowerCompany) => {
      powerCompanyDetailData.value = { ...defaultState, ...params }
    }

    return { powerCompanyDetailData, setPowerCompanyDetailData, $reset }
  },
  { persist: { storage: sessionStorage } }
)
