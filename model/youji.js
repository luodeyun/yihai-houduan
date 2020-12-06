let mongoose = require('mongoose')
let Schema = mongoose.Schema
let YoujiModel = new Schema({
    imgname:{
        type:string,
        require:true,
        unique:true
    },
    address:{
        type:string,
        required:true,
        unique:true
    },
    nickwrite:{
        type:string,
        required:true,
        unique:true
    },
    counter:{
        type:number,
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
module.exports = mongoose.model('youji',YoujiModel)