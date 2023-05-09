import axiosRequest from '@/service/index'

/** 用户的网络请求 */
export function postUsersListData(queryData: any) {
  return axiosRequest.post({
    url: '/users/list',
    data: queryData
  })
}
