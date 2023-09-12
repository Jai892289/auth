const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // role: {
    //     type: String,
    //     default: "user"
    // }
})

const UserModal = mongoose.model("users1", userSchema)
module.exports = UserModal