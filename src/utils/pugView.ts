import * as Koa from "koa"
import * as pug from "pug"
import * as path from "path"

declare module 'koa' {
    interface Context {
        render(view: String, params?: any): void
    }
}

export default async (ctx: Koa.Context, next: any) => {
    ctx.render = (view, params = {}) => {
        params.state = ctx.state
        ctx.body = pug.renderFile(path.join(__dirname, "..", "..", "views", view)+".pug", params)
    }
    await next()
}