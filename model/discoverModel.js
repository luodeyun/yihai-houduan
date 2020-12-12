let mongoose = require('mongoose')
let Schema = mongoose.Schema
let discoverSchema = new Schema({
    result: {
        type: Object,
        required: true,
        unique: true
    },
    isSuccess: {
        type: Boolean,
        required: true,
    },
    errorCode: {
        type: Number,
        required: true
    },
    message:{
        type:String,
        required:true
    },
    operationId:{
        type:String
    },
    data:{
        type:Date,
        default:Date.now()
    },enable_flag:{
        type:String,
        default:'Y',

    }
})
module.exports = mongoose.model('discovers',discoverSchema)