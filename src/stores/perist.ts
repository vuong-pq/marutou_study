import { defineStore } from 'pinia'
import { reactive } from 'vue'
import _ from 'lodash'

type SomeState = {
  state: string
}

const defaultState = {
  state: ''
}

export const useStore = defineStore(
  'persist',
  () => {
    const someState = reactive<SomeState>({
      ..._.cloneDeep(defaultState)
    })
    return { someState }
  },
  {
    persist: true
  }
)
