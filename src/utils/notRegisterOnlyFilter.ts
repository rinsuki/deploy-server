import * as Koa from "koa"
import {User} from "../models"

export default async (ctx: Koa.Context, next: any) => {
    if (await User.find().count()) {
        ctx.flash("アカウントは既に登録済みです。ログインしてください", "error")
        ctx.redirect("/login")
        return
    }
    await next()
}