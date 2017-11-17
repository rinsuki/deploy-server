const mongoose = require("mongoose")
const fs = require("fs")

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/deploy-server").catch(e => {
    console.error("MongoDB Error: "+e.message)
    console.error("MongoDB 死んでるのでは??????")
    process.exit(1)
})

module.exports = {}

fs.readdirSync(__dirname).forEach(file => {
    const name = file.replace(".js", "")
    if (name == "index") return
    module.exports[name] = require("./"+name)(mongoose)
})