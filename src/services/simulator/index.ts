import request from '../request'
import { API } from '../list-api'

const getListSimulator = async () => {
  return await request.get(API.GET_LIST_SIMULATOR)
}

export { getListSimulator }
