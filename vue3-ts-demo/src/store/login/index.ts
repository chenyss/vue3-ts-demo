import { LOGIN_TOKEN, USERINFO, USERMENU } from '@/global/constant'
import router from '@/router'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/module/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-meus'
import { defineStore } from 'pinia'

interface loginStore {
  id: string
  name: string
  token: string
  userInfo: any
  userMenuInfo: any
}
const useLogin = defineStore('login', {
  state: (): loginStore => ({
    id: '',
    token: '',
    name: '',
    userInfo: {},
    userMenuInfo: []
  }),
  getters: {},
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.name = loginResult.data.name
      this.token = loginResult.data.token

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      //3.获取用户信息
      const userInfo = await getUserInfoById(this.id)
      this.userInfo = userInfo.data

      //4.获取用户菜单权限信息
      const userMenuInfo = await getUserMenusByRoleId(this.id)
      this.userMenuInfo = userMenuInfo.data

      localCache.setCache(USERINFO, userMenuInfo.data)
      localCache.setCache(USERMENU, userMenuInfo.data)

      const routes = mapMenusToRoutes(userMenuInfo)
      routes.forEach((route) => router.addRoute('main', route))

      router.push('/main')
    },

    loadLocalCacheAction() {
      // 1.加载默认数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USERINFO)
      const userMenuInfo = localCache.getCache(USERMENU)
      if (token && userInfo && userMenuInfo) {
        this.token = token
        this.userInfo = userInfo
        this.userMenuInfo = userMenuInfo

        // 2.动态添加路由
        const routes = mapMenusToRoutes(userMenuInfo)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLogin
