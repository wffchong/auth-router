import { IRoute } from '@/typings'
import { SET_ROUTE_TREE, SET_AUTH } from './actionTypes'
import { IState } from './state'

export default {
    [SET_ROUTE_TREE](state: IState, routeTree: IRoute[]) {
        state.routeTree = routeTree
    },
    [SET_AUTH](state: IState, auth: boolean) {
        state.hasAuth = auth
    }
}
