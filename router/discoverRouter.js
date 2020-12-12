let discoverModel = require('../model/discoverModel')

let {Router} = require('express')
let router = new Router()
router.get('/discover', async (req, res) => {
    try {
      let result = await discoverModel.find()
      res.send(result)
    }catch (err) {
        res.send('网络异常')
    }
})
module.exports = router