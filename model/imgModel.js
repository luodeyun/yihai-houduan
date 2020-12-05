let mongoose = require('mongoose')
let Schema = mongoose.Schema
let imgSchema = new Schema({
    ImageName:{
        type:String,
        required:true,
        unique:true
    },
    nick_name:{
        type:String,
        required:true,
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
module.exports=mongoose.model('images',imgSchema)