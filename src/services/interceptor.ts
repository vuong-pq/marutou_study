import { LIST_API_NOT_AUTHENTICATE } from './list-api'
import type { AxiosInstance } from 'axios'
import { getSessionStorageByItem } from '@/constants/utils'

import { ElLoading } from 'element-plus/lib/components/index.js'
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
      loading.close()
      if (response?.error) {
        alert(response?.error)
      } else if (response?.data?.error) {
        alert('Id or password invalid')
        return false
      } else {
        return response.data
      }
    },
    (error) => {
      loading.close()
      console.log('[API Error]', error)
      Promise.reject(error)
      return {
        success: false,
        message: 'Error system'
      }
    }
  )
}

export { setup, checkToken }
