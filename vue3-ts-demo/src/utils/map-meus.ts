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

function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes()
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        routes.push(route)
      }
    }
  }
  return routes
}

export { loadLocalRoutes, mapMenusToRoutes }
