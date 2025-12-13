const mongoose = require("mongoose")


const  loginModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
  
})

const loginUsers = mongoose.model("loginCollection", loginModel)

module.exports = loginUsers;