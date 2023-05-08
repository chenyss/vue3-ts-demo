import useLoginStore from '@/store/login/index'
import { createPinia } from 'pinia'
import type { App } from 'vue'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  app.use(pinia)

  //动态加载路由
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default registerStore
