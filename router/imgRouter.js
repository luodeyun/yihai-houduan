let imgModel = require('../model/imgModel')
let youjiModel = require('../model/youjiModel')
let tuijianModel = require('../model/tuijianyoujis')
let recommendxqsModel = require('../model/recommendxqs')
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
        res.send('网络异常')
    }
})
router.get('/recommendyj',async(req,res)=>{
    try{     
      let result = await tuijianModel.find()
        res.send(result)
    }catch(err){
        console.log(err);
        res.send('网络异常')
    }
})
router.get('/recommendyj',async(req,res)=>{
    try{     
      let result = await tuijianModel.find()
        res.send(result)
    }catch(err){
        console.log(err);
        res.send('网络异常')
    }
})
router.get('/recommendxq',async(req,res)=>{
    try{     
        let {id}= req.query
      let result = await recommendxqsModel.findOne({id})

      
        res.send(result)
    }catch(err){
        console.log(err);
        res.send('网络异常')
    }
})
module.exports = router