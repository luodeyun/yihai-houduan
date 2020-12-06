let imgModel = require('../model/imgModel')
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
module.exports = router