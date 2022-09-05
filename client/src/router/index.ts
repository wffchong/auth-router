import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
import { SET_ROUTE_TREE } from '@/store/actionTypes'
import { generateRouter } from './route'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: 'NotFound' */'@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (!store.state.hasAuth) {
        await store.dispatch(SET_ROUTE_TREE)
        const newRoutes = generateRouter(store.state.routeTree)

        newRoutes.forEach(route => {
            router.addRoute(route)
        })
        next({
            path: to.path
        })
    } else {
        next()
    }
})

export default router
