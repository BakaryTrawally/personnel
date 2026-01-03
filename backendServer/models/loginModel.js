const mongoose = require("mongoose")

const { connectLoginDB } = require("../config/dbConnection");

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


// Create models
// let loginUsers;
// connectLoginDB()
//   .then((db) => {
//     loginUsers = db.model("personnel", loginModel);
//     console.log("Personnel DB connected");
//   })
//   .catch(console.error);

// module.exports = () => loginUsers;


const loginUsers = connectLoginDB.model("loginCollection", loginModel)

module.exports = loginUsers;