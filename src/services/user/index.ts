import request from '../request'
import { API } from '../list-api'
import { replaceUrl } from '@/constants/utils'

const getUser = async (params?: { page: number }) => {
  const urlReplaced = replaceUrl(API.USER_LIST, params)
  if (params) {
    return await request.get(urlReplaced)
  }
  return await request.get(API.USER_LIST)
}

export { getUser }
