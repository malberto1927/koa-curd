const logger = require('koa-logger')
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(logger())

router.get('/', (ctx, next) => {
    ctx.body = 'Hello world!!!'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)