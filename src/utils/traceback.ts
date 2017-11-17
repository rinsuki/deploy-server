import * as Koa from "koa"

module.exports = async (ctx: Koa.Context, next: any) => {
    try {
        await next()
    } catch(err) {
        console.error(err)
        ctx.status = err.status || 500
        ctx.body = err.message
        ctx.app.emit("error", err, ctx)
    }
}