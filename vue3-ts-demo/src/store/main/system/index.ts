import { postUsersListData } from '@/service/module/main/system/system'
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
    }
  }
})
export default useMainSystemStore
