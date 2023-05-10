import { getEntireDepartments, getEntireRoles } from '@/service/module/main/main'
import { defineStore } from 'pinia'
interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}
const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const entireRoles = await getEntireRoles()
      const entireDepartments = await getEntireDepartments()

      this.entireRoles = entireRoles.data.list
      this.entireDepartments = entireDepartments.data.list
    }
  }
})
export default useMainStore
