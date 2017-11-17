import * as Router from "koa-router"
import * as bcrypt from "bcrypt"
import notRegisterOnlyFilter from '../utils/notRegisterOnlyFilter'
import {User} from "../models"

var router = new Router

router.get("/", notRegisterOnlyFilter, async ctx => ctx.render("register"))

router.post("/", notRegisterOnlyFilter, async ctx => {
    var user = new User
    user.username = ctx.request.body.username
    user.password = await bcrypt.hash(ctx.request.body.password, await bcrypt.genSalt(12))
    user.isAdmin = true
    await user.save()
    ctx.flash("アカウントを作成しました。ログインしてください。")
    ctx.redirect("/login")
})

export default router