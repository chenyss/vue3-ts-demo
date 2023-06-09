import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router'
import pinia from './store'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia).use(router).use(ElementPlus, { locale: zhCn }).mount('#app')
