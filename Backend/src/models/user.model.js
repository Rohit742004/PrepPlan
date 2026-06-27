const mongoose = require("mongoose");
// const { use } = require("react");    

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique:[true,"User Name Already taken"],
        required:true
    },
    email:{
        type: String,
        unique:[true,"Account already exists with this email"],
        required:true
    },
    password:{
        type: String,
        required:true
    }


})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel