import * as mongoose from "mongoose"
import * as fs from "fs"

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/deploy-server").catch(e => {
    console.error("MongoDB Error: "+e.message)
    console.error("MongoDB 死んでるのでは??????")
    process.exit(1)
})

import Users from "./users"

export {
    Users
}