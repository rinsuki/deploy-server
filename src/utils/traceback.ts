module.exports = async (ctx, next) => {
    try {
        await next()
    } catch(e) {
        console.error(e)
        ctx.status = e.status || 500
        ctx.body = e.message
        ctx.app.emit("error", err, ctx)
    }
}