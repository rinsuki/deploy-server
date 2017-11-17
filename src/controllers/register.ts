import * as Router from "koa-router"
import * as bcrypt from "bcrypt"
import notRegisterOnlyFilter from '../utils/notRegisterOnlyFilter'
import {Users} from "../models"

var router = new Router

router.get("/", notRegisterOnlyFilter, async ctx => ctx.render("register"))

router.post("/", notRegisterOnlyFilter, async ctx => {
    var user = new Users
    user.username = ctx.request.body.username
    user.password = await bcrypt.hash(ctx.request.body.password, await bcrypt.genSalt(12))
    user.isAdmin = true
    ctx.body = JSON.stringify(user.toObject())
    console.log(ctx.body)
})

export default router