import { LIST_API_NOT_AUTHENTICATE } from './list-api'
import type { AxiosInstance } from 'axios'
import { getSessionStorageByItem } from '@/constants/utils'
import router from '@/router'
import { ElLoading, ElMessageBox } from 'element-plus/lib/components/index.js'

import { getCurrentInstance } from 'vue'

let loading: any
const loadingOptions = {
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)'
}

function setup(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config) {
      loading = ElLoading.service(loadingOptions)
      if (config?.url ? !LIST_API_NOT_AUTHENTICATE.includes(config.url) : false) {
        const token = getSessionStorageByItem('USER_LOGIN')
        if (token) {
          config.headers.Authorization = `Bearer ${token.token}`
        }
      }
      return config
    },
    function (err) {
      return Promise.reject(err)
    }
  )
}

function checkToken(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response: any) => {
      // console.log(response)

      loading.close()
      if (response?.data.error) {
        if (response?.data?.error?.code === 'E005') {
          localStorage.removeItem('USER_LOGIN')
          router.push('/login')
        }
        if (response.data.error.message.password || response.data.error.message.email) {
          ElMessageBox.alert('User information is invalid. Please try again!', 'Error', {
            type: 'error',
            customClass: 'popup-class'
          })
        } else {
          ElMessageBox.alert(response.data.error.message, 'Error', {
            type: 'error',
            customClass: 'popup-class'
          })
        }
      } else if (response?.error) {
        ElMessageBox.alert('ERROR DATA', 'Error', {
          type: 'error',
          customClass: 'popup-class'
        })
      } else {
        return response.data
      }
    },
    (error) => {
      loading.close()
      if (String(error.response.status) === '401') {
        console.log(123)
        ElMessageBox.alert(error.message, 'Error', { type: 'error', customClass: 'popup-class' })
        localStorage.removeItem('USER_LOGIN')
        router.push('/login')
      } else {
        ElMessageBox.alert(error.message, 'Error', { type: 'error', customClass: 'popup-class' })
      }
      Promise.reject(error)
      return {
        success: false,
        message: 'Error system'
      }
    }
  )
}

export { setup, checkToken }
