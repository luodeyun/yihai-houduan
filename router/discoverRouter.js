let discoverModel = require('../model/discoverModel')

let {Router} = require('express')
let router = new Router()
router.get('/discover', async (req, res) => { //查询集体数据
    try {
      let result = await discoverModel.find()
      res.send(result)
    }catch (err) {
        res.send('网络异常')
    }
})                              
router.get('/cover', async(req,res)=>{
  try{
      let operationId = req.query.operationId     
      console.log(operationId);      
      let resdata = await discoverModel.findOne({operationId})
      res.send(resdata.result)
  }catch(err){
      res.send('网络异常')
  }   
})
module.exports = router