const mongoose = require('mongoose')

const { connectLeaveDB } = require("../config/dbConnection");

const leaveSchema = new mongoose.Schema({
    leaveName:{
       type: String,
       required: true
    },
    proceedDate:{
        type: String,
        required: true

    },
    resumeDate:{
        type: String,
        required: true

    },
    workingDays:{
        type: Number,
        required: true

    },
})


// Create models
// let itemModel;
// connectLeaveDB()
//   .then((db) => {
//     itemModel = db.model("personnel", leaveSchema );
//     console.log("Personnel DB connected");
//   })
//   .catch(console.error);

// module.exports = () => itemModel;

const itemModel = connectLeaveDB.model("leaveTable", leaveSchema)
module.exports = itemModel