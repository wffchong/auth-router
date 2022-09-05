import express, { Application } from 'express'
import bodyParser from 'body-parser'
import { users, routes } from './data'
import type { IRoute } from './data'

const app: Application = express()
const PORT: number = 8081

// 配置post请求
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/user_router_list', (req, res) => {
    const { uid } = req.body
    if (uid) {
        const userInfo = users.find(user => user.id === uid)
        if (userInfo) {
            const authRouteList: IRoute[] = []
            userInfo.auth.map(rootId => {
                routes.map(route => {
                    if (rootId === route.id) {
                        authRouteList.push(route)
                    }
                })
            })
            res.status(200).send({
                code: 0,
                message: 'ok',
                data: authRouteList
            })
        } else {
            res.status(200).send({
                code: 1002,
                msg: 'No UID received',
                data: null
            })
        }
    } else {
        res.status(200).send({
            code: 1002,
            message: 'No UID received'
        })
    }
})

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT + '.')
})
