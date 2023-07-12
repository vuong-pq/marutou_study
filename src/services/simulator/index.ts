import request from '../request'
import { API } from '../list-api'
import { replaceUrl } from '@/constants/utils'

const getListSimulator = async (params: any) => {
  const urlReplaced = replaceUrl(API.GET_LIST_SIMULATOR, params)
  if (params) {
    return await request.get(urlReplaced)
  }
  return await request.get(API.GET_LIST_SIMULATOR)
}

export { getListSimulator }
