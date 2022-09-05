import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'

import { SET_ROUTE_TREE } from '@/store/actionTypes'

const app = createApp(App)


app.use(router)

app.use(store)
app.mount('#app')
