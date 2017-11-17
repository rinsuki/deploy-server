const pug = require("pug")
const path = require("path")

module.exports = async (ctx, next) => {
    ctx.render = (view, params = {}) => {
        params.state = ctx.state
        ctx.body = pug.renderFile(path.join(__dirname, "..", "views", view)+".pug", params)
    }
    await next()
}