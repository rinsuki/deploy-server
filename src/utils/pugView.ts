import * as Koa from "koa"
const pug = require("pug")
const path = require("path")

declare module 'koa' {
    interface Context {
        render(view: String, params?: any): void
    }
}

module.exports = async (ctx: Koa.Context, next: any) => {
    ctx.render = (view, params = {}) => {
        params.state = ctx.state
        ctx.body = pug.renderFile(path.join(__dirname, "..", "..", "views", view)+".pug", params)
    }
    await next()
}