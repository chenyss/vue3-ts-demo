import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const routeArr: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })
  for (const key in files) {
    const module = files[key]
    routeArr.push(module.default)
  }

  return routeArr
}

let mainRedirectPath: string = ''
function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes()
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        //第一次匹配到的一级目录，手动添加一层重定向的路由
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        routes.push(route)
      }
      // 记录第一个被匹配到的菜单
      if (!mainRedirectPath && route) mainRedirectPath = submenu.url
    }
  }

  return routes
}

export { loadLocalRoutes, mapMenusToRoutes, mainRedirectPath }
