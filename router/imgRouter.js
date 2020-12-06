let imgModel = require('../model/imgModel')
let youjiModel = require('../model/youji')
let { Router} = require('express')
let router = new Router()

router.get('/img',  async(req, res)=> {
    try{
    let result = await imgModel.find ()
    res.send(result)
   }catch(err){
       console.log(err);
       res.send('网络异常，请稍后重试')
   }
})
router.get('/youji',async(req,res)=>{
    try{
        let result = await youjiModel.find()
        res.send(result)
    }catch(err){
        console.log(err);
        res.send('网络异常')
        
    }
})
module.exports = router