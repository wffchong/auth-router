import { getUserRouteList } from '@/services'
import { Commit } from 'vuex'
import { SET_AUTH, SET_ROUTE_TREE } from './actionTypes'
import { IState } from './state'
import { formatRouteTree } from '@/utils'
import { IRoute } from '@/typings'

export default {
    async [SET_ROUTE_TREE]({ commit, state }: { commit: Commit; state: IState }) {
        const routeList = (await getUserRouteList(state.uid)) as unknown as IRoute[]
        const routeTree = formatRouteTree(routeList)

        commit(SET_ROUTE_TREE, routeTree)
        commit(SET_AUTH, true)
    }
}
