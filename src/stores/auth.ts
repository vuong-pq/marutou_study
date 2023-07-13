import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import _ from 'lodash'
import LABEL from '@/constants/label'
import { loginAPI, logoutAPI } from '@/services/auth'

import { setSessionStorageByItem } from '@/constants/utils'

type UserState = {
  roleUser: Number
  json: any
  data: any
  email: string | null
  password: string | null
}

const defaultState = {
  roleUser: 1,
  json: null,
  data: null,
  email: null,
  password: null
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const state = reactive<UserState>({
      ..._.cloneDeep(defaultState)
    })

    const login = async (params: any) => {
      const response: { [key: string]: any } = await loginAPI(params)
      console.log(response)
      if (response?.success === false) {
        state.password = null
        alert(response.message)
      } else {
        if (response) {
          // Lưu token
          setSessionStorageByItem('USER_LOGIN', response)
          state.data = response

          if (response.user) {
            if (response.user.role === '01') {
              state.roleUser = 1
            } else {
              state.roleUser = 2
            }
          }

          if (String(state.roleUser) === LABEL.COMMON.NUMBER.TWO) {
            router.replace('/admin')
          } else {
            router.replace('/')
          }
        } else {
          state.password = null
        }
      }
    }

    const logout = async () => {
      const response: { [key: string]: any } = await logoutAPI()
      console.log(response)

      localStorage.removeItem('USER_LOGIN')
      router.push('/login')
    }
    return { state, login, logout }
  },
  {
    persist: {
      paths: ['state.roleUser', 'state.data'],
      storage: localStorage
    }
  }
)
