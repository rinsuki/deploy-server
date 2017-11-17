import * as Koa from "koa"

declare module 'koa' {
    interface Context {
        flash(message: String, type?: String): void
    }
}

export default async (ctx: Koa.Context, next: any) => {
    ctx.state.flash = () => {
        return (ctx.session!.flash || []).shift()
    }
    ctx.flash = (message, type="info") => {
        if (!(ctx.session!.flash instanceof Array)) ctx.session!.flash = []
        ctx.session!.flash.push([message, type])
        ctx.session!.save()
    }
    await next()
}