// const mongoose = require("mongoose");

// /* ---------- Leave Sub-Schema ---------- */
// const leaveSchema = new mongoose.Schema({
//   leaveName: {
//     type: String,
//     required: true,
//   },
//   proceedDate: {
//     type: String,
//     required: true,
//   },
//   resumeDate: {
//     type: String,
//     required: true,
//   },
//   workingDays: {
//     type: Number,
//     required: true,
//   },
// });

// /* ---------- Main User Schema ---------- */
// const userSchema = new mongoose.Schema({
//   // Personnel info
//   title: {
//     type: String,
//     required: true,
//   },
//   fullName: {
//     type: String,
//     required: true,
//   },
//   opsNumber: {
//     type: Number,
//     required: true,
//     unique: true,
//   },

//   // Login info
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },

//   // Leave records (one user → many leaves)
//   leaves: [leaveSchema],

//   // Created date
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require('mongoose')

const { connectPersonnelDB } = require("../config/dbConnection");

const postTemplate = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    opsNumber: {
        type: Number,
        required: true,
        unique: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})






const postTemplat = connectPersonnelDB.model('personnel', postTemplate);
module.exports = postTemplat;

