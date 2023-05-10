import axiosRequest from '@/service/index'

/** 用户的网络请求 */
export function getEntireRoles() {
  return axiosRequest.post({
    url: '/role/list'
  })
}

export function getEntireDepartments() {
  return axiosRequest.post({
    url: '/department/list'
  })
}
