const models = require("../models")

module.exports = async (ctx, next) => {
    if (await models.users.find().count()) {
        ctx.flash("アカウントは既に登録済みです。ログインしてください", "error")
        ctx.redirect("/login")
        return
    }
    next()
}