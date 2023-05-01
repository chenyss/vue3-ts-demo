import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
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
app.use(router).use(pinia).use(ElementPlus).mount('#app')
