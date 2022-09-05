import { http } from '@/utils'

enum API {
    GET_USER_ROUTE_LIST = '/api/user_router_list'
}

const getUserRouteList = (uid: number) => {
    return http.post(API.GET_USER_ROUTE_LIST, { uid })
}

export { getUserRouteList }
