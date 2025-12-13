const mongoose = require('mongoose')

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

const itemModel = mongoose.model("leaveTable", leaveSchema)
module.exports = itemModel