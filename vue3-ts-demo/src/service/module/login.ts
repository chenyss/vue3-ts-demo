import type { IAccount } from '@/types'
import axiosRequest from '../index'

export function accountLoginRequest(account: IAccount) {
  return axiosRequest.post({
    url: '/login',
    data: account
  })
}
