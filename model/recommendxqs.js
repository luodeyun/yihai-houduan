let mongoose = require('mongoose')
let Schema = mongoose.Schema
let recommendxqSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    mainImgUrl: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    },
    tags:{
        type:String,
        required:true
    },
    creationTime:{
        type:String,
        required:true
    },
    releaseTime:{
        type:String,
        required:true
    },
    pageView:{
        type:Number,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    isPurpose:{
        type:Boolean,
        required:true
    },
    isPraise:{
        type:Boolean,
        required:true
    },
    rowNumber:{
        type:Number,
        required:true
    },
    isExistVideoUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    element:{
        type:Object,
        required:true
    },
    isSuccess:{
        type:String,
        required:true
    },
    errorCode:{
        type:Number,
        required:true
    },
    operationId:{
        type:String,
        required:true
    },
    cityName:{
        type:String,
        required:true
    },  
    data:{
        type:Date,
        default:Date.now()
    },enable_flag:{
        type:String,
        default:'Y',

    }
})
module.exports = mongoose.model('tuijianxqs',recommendxqSchema)