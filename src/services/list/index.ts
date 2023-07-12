import request from '../request'
import { API } from '../list-api'

const getListDevice = async () => {
  return await request.get(API.GET_LIST_DEVICE)
}

export { getListDevice }
