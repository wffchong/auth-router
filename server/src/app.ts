import express, { Application } from 'express'
import bodyParser from 'body-parser'

const app: Application = express()
const PORT: number = 8081

// 配置post请求
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT + '.')
})
