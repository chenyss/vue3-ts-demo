import { LOGIN_TOKEN } from '@/global/constant'
import { accountLoginRequest } from '@/service/module/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'

const useLogin = defineStore('login', {
  state: () => ({
    id: '',
    name: localCache.getCache(LOGIN_TOKEN) ?? '',
    token: ''
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
    }
  }
})

export default useLogin
