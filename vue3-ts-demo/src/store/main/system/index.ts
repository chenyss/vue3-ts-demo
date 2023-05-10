import { deleteUserById, editUserData, newUserData, postUsersListData } from '@/service/module/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useMainSystemStore = defineStore('mainSystem', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
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
    }
  }
})
export default useMainSystemStore
