import axiosRequest from '@/service/index'

/** 用户的网络请求 */
export function postUsersListData() {
  return axiosRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
