import { createStore } from 'vuex'
import { IState } from './state'
import state from './state'
import actions from './actions'
import mutations from './mutations'

const store = createStore<IState>({
    state,
    actions,
    mutations
})

export default store
