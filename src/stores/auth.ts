import { ROUTER_PATH } from '@/constants'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { reactive } from 'vue'
import _ from 'lodash'
import LABEL from '@/constants/label'
import { loginAPI } from '@/services/auth'

type UserState = {
  roleUser: Number
  json: any
}

const defaultState = {
  roleUser: 1,
  json: null,
  email: '1232',
  password: '1234'
}

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)

  const state = reactive<UserState>({
    ..._.cloneDeep(defaultState)
  })

  const login = async () => {
    // axios
    //   .post('http://10.1.39.73/api/login', {
    //     email: 'tuanpv2@rikkeisoft.com',
    //     password: '12345678678'
    //   })
    //   .then((response) => {
    //     // Xử lý kết quả thành công
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     // Xử lý lỗi
    //     console.error(error)
    //   })
    const param = {
      email: 'tuanpv2@rikkeisoft.com',
      password: '12345678'
    }

    const log = await loginAPI(param)
    console.log(log)

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
    state.roleUser = value
  }

  return { state, loggedIn, login, logout, changeRole }
})
