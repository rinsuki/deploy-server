import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as Session from 'koa-session'
import * as BodyParser from 'koa-bodyparser'

import * as models from './models'

import middlewareTraceback from './utils/traceback'
import middlewarePugView from './utils/pugView'
import middlewareFlash from './utils/flash'
import middlewareUserAuth from './utils/userAuth'

import controllerRegister from './controllers/register'
import controllerLogin from './controllers/login'

const app = new Koa()

app.keys = ["ふーん、アンタが私のプロデューサー?私は渋谷凛。今日からよろしくね"]

app.use(middlewareTraceback)
app.use(BodyParser())
app.use(Session(app))
app.use(middlewarePugView)
app.use(middlewareFlash)
app.use(middlewareUserAuth)

var router = new Router

router.use("/register", controllerRegister.routes())
router.use("/login", controllerLogin.routes())

router.use(async (ctx, next) => {
    if (!ctx.user) {
        ctx.redirect("/login?next="+encodeURIComponent(ctx.path))
        return
    }
    await next()
})

router.get("/", async ctx => ctx.render("index"))

app.use(router.routes())

app.listen(process.env.PORT || 5000, function() {
    console.log("listen for http://localhost:"+(process.env.PORT || 5000))
})