import { LIST_API_NOT_AUTHENTICATE } from './list-api'
import type { AxiosInstance } from 'axios'

function setup(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config) {
      if (config?.url ? !LIST_API_NOT_AUTHENTICATE.includes(config.url) : false) {
        const token = sessionStorage.getItem('access_token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
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
