import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { reactive } from 'vue'
import _ from 'lodash'
import LABEL from '@/constants/label'

type UserState = {
  roleUser: Number
  json: any
}

const defaultState = {
  roleUser: 1,
  json: null
}

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(true)
  const roleValue = ref(1)

  const state = reactive<UserState>({
    ..._.cloneDeep(defaultState)
  })

  const login = () => {
    loggedIn.value = true
    if (String(state.roleUser) === LABEL.COMMON.NUMBER.TWO) {
      router.replace('/admin')
    } else {
      router.replace('/')
    }
  }

  const logout = () => {
    loggedIn.value = false
    router.push('/login')
  }
  const changeRole = (value: number) => {
    console.log('value: ', value)
    state.roleUser = value
  }

  return { state, loggedIn, login, logout, changeRole }
})
