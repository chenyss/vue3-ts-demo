import {
  deletePageById,
  deleteUserById,
  editPageData,
  editUserData,
  newPageData,
  newUserData,
  postPageListData,
  postUsersListData
} from '@/service/module/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useMainSystemStore = defineStore('mainSystem', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async postUsersListAction(queryData: any) {
      const usersListResult = await postUsersListData(queryData)
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },
    async newUserDataAction(userInfo: any) {
      await newUserData(userInfo)
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async deleteUserDataAction(id: number) {
      await deleteUserById(id)
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async editUserDataAction(id: number, userInfo: any) {
      await editUserData(id, userInfo)
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    //通用的页面增删改查请求
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data

      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      await deletePageById(pageName, id)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async newPageDataAction(pageName: string, pageInfo: any) {
      await newPageData(pageName, pageInfo)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async editPageDataAction(pageName: string, id: number, pageInfo: any) {
      await editPageData(pageName, id, pageInfo)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    }
  }
})
export default useMainSystemStore
