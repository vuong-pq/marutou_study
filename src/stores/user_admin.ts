import { ref } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'

interface UserAdmin {
  userId: string
  name?: string
  pass?: string
}

const defaultState = {
  userId: '',
  name: '',
  pass: ''
}

export const useUserAdminStore = defineStore(
  'user_admin',
  () => {
    const userAdminData = ref<UserAdmin>({
      ..._.cloneDeep(defaultState)
    })

    const $reset = () => {
      userAdminData.value = { ...defaultState }
    }

    const setUserAdminData = (params: UserAdmin) => {
      userAdminData.value = { ...defaultState, ...params }
    }

    return { userAdminData, setUserAdminData, $reset }
  },
  { persist: { storage: sessionStorage } }
)
