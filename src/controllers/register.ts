import * as Router from "koa-router"
const bcrypt = require("bcrypt")
const models = require("../models")

var router = new Router

router.get("/", require("../utils/notRegisterOnlyFilter"), async ctx => ctx.render("register"))

router.post("/", require("../utils/notRegisterOnlyFilter"), async ctx => {
    var user = new models.users
    user.username = ctx.request.body.username
    user.password = await bcrypt.hash(ctx.request.body.password, await bcrypt.genSalt(12))
    user.isAdmin = true
    ctx.body = JSON.stringify(user.toObject())
    console.log(ctx.body)
})

module.exports = router