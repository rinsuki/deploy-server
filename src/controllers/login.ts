import * as Koa from "koa"
import * as Router from "koa-router"
import * as bcrypt from "bcrypt"
import {User} from "../models"
import {FlashTypes} from "../utils/flash"

const router = new Router

router.get("/", async ctx => {
    if (ctx.user) {
        ctx.redirect("/")
        return
    }
    if (!await User.count({})) {
        ctx.flash("アカウントが作成されていません。まず最初に、アカウントを作成してください。")
        ctx.redirect("/register")
        return
    }
    ctx.render("login")
})

router.post("/", async ctx => {
    const user = await User.findOne({username: ctx.request.body.username})
    if(!user) {
        ctx.flash("usernameが間違っています", FlashTypes.error)
        ctx.redirect("")
        return
    }
    if(!await bcrypt.compare(ctx.request.body.password, user.password)) {
        ctx.flash("passwordが間違っています", FlashTypes.error)
        ctx.redirect("")
        return
    }
    ctx.session!.user = user.id
    ctx.redirect("/")
})

export default router