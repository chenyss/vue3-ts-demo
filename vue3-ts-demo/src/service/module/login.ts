import type { IAccount } from '@/types'
import axiosRequest from '../index'

export function accountLoginRequest(account: IAccount) {
  return axiosRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: string) {
  return axiosRequest.get({
    url: `/users/${id}`
  })
}

export function getUserMenusByRoleId(id: string) {
  return axiosRequest.get({
    url: `/role/${id}/menu`
  })
}
