import * as mongoose from "mongoose"
const r = require("../utils/regexValidate")

var schema = new mongoose.Schema({
    username: {type: String, required: true, validate: [r(/^[A-Za-z0-9_]+$/)]},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
}, {
    timestamps: true
})

module.exports = mongoose.model("users", schema)
