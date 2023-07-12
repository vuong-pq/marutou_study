import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserAdmin } from '@/constants/types'
import _ from 'lodash'

const defaultState = {
  userId: 'vuongid',
  name: '',
  pass: '',
  company: [
    '北海道電力',
    '東北電力',
    '東京電力',
    '中部電力',
    '北陸電力',
    '関西電力',
    '中国電力',
    '四国電力',
    '九州電力'
  ],
  dealer: 'vuong',
  isBan: false,
  registration_status: false,
  availability: true,
  deleteMess: ''
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
  { persist: true }
)
