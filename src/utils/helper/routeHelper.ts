import { RouteRecordRaw } from 'vue-router'

/**
 * @description: 扁平化处理的路由数组
 * @return {*}
 * @param {RouteRecordRaw} accessRoutes
 */
export function generateFlatRoutes(accessRoutes: RouteRecordRaw[]) {
  const flatRoutes: RouteRecordRaw[] = []

  for (const item of accessRoutes) {
    let flatChildrenRoutes: RouteRecordRaw[] = []
    if (item.children && item.children.length > 0) {
      flatChildrenRoutes = castToFlatRoute(item.children)
    }
    // 一级路由是布局路由,需要处理的只是其子路由数据
    flatRoutes.push({
      path: item.path,
      name: item.name,
      redirect: item.redirect,
      component: item.component,
      children: flatChildrenRoutes,
      meta: item.meta,
    })
  }

  return flatRoutes
}

/**
 * @description: 递归将多维数组转换成只有子节点的一维数组
 * @return {*} 只有子节点的一维数组
 */
function castToFlatRoute(
  routes: RouteRecordRaw[],
  flatRoutes: RouteRecordRaw[] = []
): RouteRecordRaw[] {
  for (const item of routes) {
    if (item.children && item.children.length > 0) {
      if (item.redirect && item.redirect !== 'noRedirect') {
        flatRoutes.push({
          name: item.name,
          path: item.path,
          redirect: item.redirect,
          meta: item.meta,
        })
      }
      castToFlatRoute(item.children, flatRoutes)
    } else {
      flatRoutes.push({
        name: item.name,
        path: item.path,
        component: item.component,
        meta: item.meta,
      })
    }
  }
  return flatRoutes
}
