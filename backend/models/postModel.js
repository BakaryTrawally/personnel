const mongoose = require('mongoose')

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


// Create models
const postTemplat = mongoose.model('personnel', postTemplate);
// const leaveSchem = mongoose.model('Product', leaveSchema);

module.exports = postTemplat;

