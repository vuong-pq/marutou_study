import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import _ from 'lodash'

type SomeState = {
  state: string
}

const defaultState = {
  state: ''
}

export const useStore = defineStore(
  'perist',
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
