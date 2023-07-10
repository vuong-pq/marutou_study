import { LIST_API_NOT_AUTHENTICATE } from './list-api'
import type { AxiosInstance } from 'axios'
import { getSessionStorageByItem } from '@/constants/utils'
import router from '@/router'
import { ElLoading } from 'element-plus/lib/components/index.js'
import { useModalStore } from '@/stores/modal'
import { MODAL_TYPE } from '@/constants'

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
      const { openModal } = useModalStore()

      loading.close()
      let errorMessage = ''
      if (response?.data.error) {
        if (response?.data?.error?.code === 'E005') {
          localStorage.removeItem('USER_LOGIN')
          router.push('/login')
        }
        if (response.data.error.message.password || response.data.error.message.email) {
          errorMessage = 'User information is invalid. Please try again!'
        } else {
          errorMessage = response.data.error.message
        }
      } else if (response?.error) {
        errorMessage = 'ERROR DATA'
      } else {
        return response.data
      }
      if (errorMessage) {
        openModal({
          open: true,
          type: MODAL_TYPE.ERROR,
          title: 'Error',
          content: errorMessage,
          okText: 'OK'
        })
      }
    },
    (error) => {
      const { openModal } = useModalStore()
      loading.close()
      if (String(error.response.status) === '401') {
        localStorage.removeItem('USER_LOGIN')
        router.push('/login')
      }
      openModal({
        open: true,
        type: MODAL_TYPE.ERROR,
        title: 'Error',
        content: error.message,
        okText: 'OK'
      })
      Promise.reject(error)
      return {
        success: false,
        message: 'Error system'
      }
    }
  )
}

export { setup, checkToken }
