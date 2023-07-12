import request from '../request'
import { API } from '../list-api'

const loginAPI = async (params: { email: string; password: string }) => {
  return await request.post(API.LOGIN, params)
}

const logoutAPI = async () => {
  return await request.post(API.LOGOUT)
}

export { loginAPI, logoutAPI }
