const r = require("../utils/regexValidate")

module.exports = mongoose => {
    var schema = new mongoose.Schema({
        username: {type: String, required: true, validate: [r(/^[A-Za-z0-9_]+$/)]}
    }, {
        timestamp: true
    })
    return mongoose.model("users", schema)
}