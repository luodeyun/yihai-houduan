let carModel = require('../model/carModel')
let {Router}  = require('express')
let router = new Router()

router.get('/car', async (req,res)=>{
     try{
         let result = await carModel.find()
       res.send(result)
     }catch(err){

     }
})
module.exports = router