import axios from 'axios'
import { setup, checkToken } from './interceptor'

const request = axios.create({
  baseURL: `${process.env.VITE_APP_API_URL}/${process.env.VITE_APP_API_VERSION}/`,
  headers: {
    'Content-Type': 'application/json'
  }
})

setup(request)
checkToken(request)

export default request
