import * as Koa from "koa"
import {User} from "../models"
import { FlashTypes } from "./flash";

export default async (ctx: Koa.Context, next: any) => {
    if (await User.find().count()) {
        ctx.flash("アカウントは既に登録済みです。ログインしてください", FlashTypes.error)
        ctx.redirect("/login")
        return
    }
    await next()
}