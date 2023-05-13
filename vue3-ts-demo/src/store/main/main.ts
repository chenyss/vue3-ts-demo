import { getEntireDepartments, getEntireMenus, getEntireRoles } from '@/service/module/main/main'
import { defineStore } from 'pinia'
interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}
const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const entireRoles = await getEntireRoles()
      const entireDepartments = await getEntireDepartments()
      const menuResult = await getEntireMenus()
      this.entireRoles = entireRoles.data.list
      this.entireDepartments = entireDepartments.data.list
      this.entireMenus = menuResult.data.list
    }
  }
})
export default useMainStore
