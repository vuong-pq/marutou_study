import { ref } from 'vue'
import { defineStore } from 'pinia'
import { MODAL_TYPE } from '@/constants'

interface ModalData {
  open: boolean
  type: string
  title: string
  content: string
  btnText?: string
  onOk?: Function
}
//add type modal
//add transition
const defaultState = {
  open: false,
  type: MODAL_TYPE.INFO,
  title: '',
  content: '',
  btnText: ''
}

export const useModalStore = defineStore('modal', () => {
  const modalData = ref<ModalData>({
    ...defaultState
  })

  const openModal = (params: ModalData) => {
    modalData.value = { ...defaultState, ...params }
  }
  const closeModal = () => {
    modalData.value = { ...defaultState }
  }

  return { modalData, openModal, closeModal }
})
