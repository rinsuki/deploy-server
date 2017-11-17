module.exports = async (ctx, next) => {
    ctx.state.flash = () => {
        return (ctx.session.flash || []).shift()
    }
    ctx.flash = (message, type="info") => {
        if (!(ctx.session.flash instanceof Array)) ctx.session.flash = []
        ctx.session.flash.push([message, type])
        ctx.session.save()
    }
    await next()
}