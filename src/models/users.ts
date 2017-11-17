import * as mongoose from "mongoose"
import r from "../utils/regexValidate"

var schema = new mongoose.Schema({
    username: {type: String, required: true, validate: [r(/^[A-Za-z0-9_]+$/)]},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
}, {
    timestamps: true
})

export interface IUser extends mongoose.Document{
    username: string
    password: string
    isAdmin: boolean
}

export default mongoose.model("users", schema) as mongoose.Model<IUser>

