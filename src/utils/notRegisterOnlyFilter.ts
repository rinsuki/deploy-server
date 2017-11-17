import * as Koa from "koa"
import {Users} from "../models"

export default async (ctx: Koa.Context, next: any) => {
    if (await Users.find().count()) {
        ctx.flash("アカウントは既に登録済みです。ログインしてください", "error")
        ctx.redirect("/login")
        return
    }
    next()
}