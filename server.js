let express = require('express')
let app = express()
let db = require('./db')
let imgRouter = require('./router/imgRouter')
let login = require('./router/login')
let session = require('express-session')
let bodyParser = require('body-parser')
app.use(session({
    secret:"ekybocat",
    name:"sessionId",
    resave:false,
    saveUninitalized:false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  }));
db.then(() => {
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(express.static('public'))
    app.use(imgRouter)      //获取图片资源模块
    app.use(login)
}).catch(err=>{
    console.log('数据库连接失败',err);
    
})
app.listen(3000, (err) => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
})