let mongoose = require('mongoose')
let Schema = mongoose.Schema
let YoujiSchema = new Schema({
    imgname:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        unique:true
    },
    nickwrite:{
        type:String,
        required:true,
        unique:true
    },
    counter:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now()
      },
    enable_flag:{
        type:String,
        default:'Y'
    },
})
module.exports = mongoose.model('youjis',YoujiSchema)