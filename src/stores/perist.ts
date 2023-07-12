import { defineStore } from 'pinia'
import { reactive } from 'vue'
import _ from 'lodash'

type SomeState = {
  input1: string
  input2: string
  input3: string
  input4: string
  input5: string
  input6: string
  input7: string
  input8: string
  input9: string
  input10: string
  input11: string
  datas: any
}

const defaultState = {
  input1: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: '',
  input9: '',
  input10: '',
  input11: '',
  input12: '',
  datas: [
    {
      price: 0,
      m3: 0
    },
    {
      price: 5,
      m3: 1
    }
  ]
}

export const useStore = defineStore(
  'persist',
  () => {
    const someState = reactive<SomeState>({
      ..._.cloneDeep(defaultState)
    })
    return { someState }
  }
  // {
  //   persist: true
  // }
)
