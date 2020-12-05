let express = require('express')
let app = express()
let db = require('./db')
let cors = require('cors');
let userModel = require('./model/userModel')
let imagesModel = require('./model/imgModel')
db.then(() => {
    app.use(express.urlencoded({
        extended: true
    }))  
    app.use(express.static('public'))
    app.get('/', async (req, res) => {
        let result = await userModel.findOne({
            name: '班长'
        })     
        res.send(__dirname + '/public/img/rBUFH1-P7D-AVX2WAAHGORhHbJM660.jpg')
    })
    app.get('/img',  async(req, res)=> {
        let result = await imagesModel.find ()
        res.send(result)
    })
})
app.listen(3000, (err) => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
})