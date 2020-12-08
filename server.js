let express = require('express')
let app = express()
let db = require('./db')
let imgRouter = require('./router/imgRouter')

db.then(() => {
    app.use(express.urlencoded({extended: true}))  
    app.use(express.static('public'))
    app.use(imgRouter)      //获取图片资源模块
    
}).catch(err=>{
    console.log('数据库连接失败',err);
    
})
app.listen(3000, (err) => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
})