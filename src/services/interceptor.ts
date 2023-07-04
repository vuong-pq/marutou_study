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
    (response) => response,
    (error) => {
      console.log('[API Error]', error)
      Promise.reject(error)
      return {
        data: {
          success: false,
          message: 'Error system'
        }
      }
    }
  )
}

export { setup, checkToken }
