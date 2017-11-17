const Koa = require("koa")
const app = new Koa()
const Router = require("koa-router")

const models = require("./models")

app.keys = ["ふーん、アンタが私のプロデューサー?私は渋谷凛。今日からよろしくね  "]

app.use(require("koa-session")(app))
app.use(require("./utils/pugView"))
app.use(require("./utils/flash"))

const router = new Router

router.get("/", ctx => ctx.render("index"))

router.get("/login", ctx => ctx.render("login"))

router.post("/login", (ctx) => {
    ctx.body = "wip"
})

router.get("/register", require("./utils/notRegisterOnlyFilter"), async ctx => ctx.render("register"))

router.post("/register", require("./utils/notRegisterOnlyFilter"))

app.use(router.routes())

app.listen(process.env.PORT || 5000, function() {
    console.log("listen for http://localhost:"+(process.env.PORT || 5000))
})