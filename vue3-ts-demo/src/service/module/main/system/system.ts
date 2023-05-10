import axiosRequest from '@/service/index'

/** 用户的网络请求 */
export function postUsersListData(queryData: any) {
  return axiosRequest.post({
    url: '/users/list',
    data: queryData
  })
}

export function deleteUserById(id: number) {
  return axiosRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserData(userInfo: any) {
  return axiosRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: any) {
  return axiosRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}
