import type { AxiosRequestConfig } from 'axios'
import { BASE_URL, TIME_OUT } from './config'
import AxiosRequest from './request'
const axiosRequest = new AxiosRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
//在config属性上添加自定义的拦截器属性interceptors
export const axiosRequest2 = new AxiosRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config: AxiosRequestConfig) => {
      return config
    },
    requestFailureFn: (err: any) => {
      return err
    },
    responseSuccessFn: (res: any) => {
      return res
    },
    responseFailureFn: (err: any) => {
      return err
    }
  }
})

export default axiosRequest
