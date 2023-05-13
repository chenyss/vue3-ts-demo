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

/** 针对页面的网络请求: 增删改查 */
export function postPageListData(pageName: string, queryInfo: any) {
  return axiosRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return axiosRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, pageInfo: any) {
  return axiosRequest.post({
    url: `/${pageName}`,
    data: pageInfo
  })
}

export function editPageData(pageName: string, id: number, pageInfo: any) {
  return axiosRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
