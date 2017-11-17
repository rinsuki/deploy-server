import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as Session from 'koa-session'
import * as BodyParser from 'koa-bodyparser'

import * as models from './models'

import middlewareTraceback from './utils/traceback'
import middlewarePugView from './utils/pugView'
import middlewareFlash from './utils/flash'

import register from './controllers/register'

const app = new Koa()

app.keys = ["ふーん、アンタが私のプロデューサー?私は渋谷凛。今日からよろしくね"]

app.use(middlewareTraceback)
app.use(BodyParser())
app.use(Session(app))
app.use(middlewarePugView)
app.use(middlewareFlash)

var router = new Router

router.get("/", ctx => ctx.render("index"))

router.get("/login", ctx => ctx.render("login"))

router.post("/login", ctx => {
    ctx.body = "wip"
})

router.use("/register", register.routes())

app.use(router.routes())

app.listen(process.env.PORT || 5000, function() {
    console.log("listen for http://localhost:"+(process.env.PORT || 5000))
})