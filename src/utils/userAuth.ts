import * as Koa from "koa"
import {User, IUser} from "../models"

declare module 'koa' {
    interface Context {
        user?: IUser
    }
}

export default async (ctx: Koa.Context, next: any) => {
    if (ctx.session!.user) {
        ctx.user = await User.findById(ctx.session!.user) || undefined
    }
    await next()
}