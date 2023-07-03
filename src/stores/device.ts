import { ref } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
import type { Device } from '@/constants/types'

const defaultState = {
  title: '',
  name: ''
}

export const useDeviceStore = defineStore('device', () => {
  const deviceData = ref<Device>({
    ..._.cloneDeep(defaultState)
  })

  const isElectricalComponent = ref<boolean>(false)

  const setDeviceData = (params: Device) => {
    deviceData.value = { ...params }
  }

  const checkIsElectricalComponent = (params: boolean) => {
    isElectricalComponent.value = params
  }

  return { deviceData, setDeviceData, checkIsElectricalComponent, isElectricalComponent }
})
