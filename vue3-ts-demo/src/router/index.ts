import { LOGIN_TOKEN } from '@/global/constant'
import { localCache } from '@/utils/cache'
import { mainRedirectPath } from '@/utils/map-meus'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (!token && to.path === '/main') {
    return '/login'
  }

  if (to.path === '/main' && mainRedirectPath.length > 0) {
    return mainRedirectPath
  }
})

export default router
