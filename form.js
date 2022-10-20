const mongoose = require("mongoose");

const sheetSchema = new mongoose.Schema({
    size : {
        type:String,
        required:true
    },

    gct : {
        type:String,
    },

    ht : {
        type:String,
    },

    station : {
        type:String,
        default:'none',
    },
})

const user = mongoose.model('sheets', sheetSchema)
module.exports = user;