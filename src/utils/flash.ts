import * as Koa from "koa"

declare module 'koa' {
    interface Context {
        flash(message: String, type?: FlashTypes): void
    }
}

export enum FlashTypes {
    info = "info",
    warning = "warning",
    error = "error",
}

export default async (ctx: Koa.Context, next: any) => {
    ctx.state.flash = () => {
        return (ctx.session!.flash || []).shift()
    }
    ctx.flash = (message, type: FlashTypes=FlashTypes.info) => {
        if (!(ctx.session!.flash instanceof Array)) ctx.session!.flash = []
        ctx.session!.flash.push([message, type])
        ctx.session!.save()
    }
    await next()
}
