let mongoose = require('mongoose')
let Schema = mongoose.Schema
let carSchema = new Schema({
      RecommendList:{
          type:String,
      },
      StorkPriceList:{
          type:Object,
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
module.exports=mongoose.model('electioncars',carSchema)