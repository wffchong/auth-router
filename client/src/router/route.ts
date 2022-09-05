import { IRoute } from '@/typings'
import { RouteRecordRaw } from 'vue-router'

export function generateRouter(routeTree: IRoute[]) {
    // 将树形菜单转化成route对象
    let newRoutes = routeTree.map(route => {
        let _route: RouteRecordRaw = {
            path: route.path,
            name: route.name,
            component: () => import(`/* webpackChunkName: '${route.name}' */@/views/${route.name}.vue`),
            children: []
        }

        if (route.children) {
            _route.children = generateRouter(route.children)
        }
        return _route
    })
    return newRoutes
}