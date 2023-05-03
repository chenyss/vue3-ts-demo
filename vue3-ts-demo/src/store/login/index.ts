import { LOGIN_TOKEN } from '@/global/constant'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/module/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
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
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: '',
    userInfo: {},
    userMenuInfo: {}
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
      this.userInfo = userInfo

      //4.获取用户菜单权限信息
      const userMenuInfo = await getUserMenusByRoleId(this.id)
      this.userMenuInfo = userMenuInfo
    }
  }
})

export default useLogin
