let { Router} = require('express')
var svgCaptcha = require ('svg-captcha')
let router = new Router()
//验证码路由
router.get('/captcha',async(req,res)=>{
    var captcha = svgCaptcha.create({noise:3,background: '#aa9986',color:true});
    //存储session  1.第一次浏览器执行登录或注册时留下客户信息存储在数据库中，然后在服务器开启一块内存 该内存供session回话存储使用
     //然后客户的信息存在session那块内存中，接下来给客户端返回一个cookie cookie包含着上一步的回话存储的编号
     //后面是客户端第二次发起请求时，会携带cookie，
    //  上面操作一句代码搞定  req.session 
    req.session.captcha = captcha.text.toLowerCase()
    res.type('svg');
    console.log("captcha:",req.session)
	res.status(200).send(captcha.data);
})
router.post('/login',async(req,res)=>{
    const {phone,password,code} = req.body
     console.log(req.session);   
     if(code.toLowerCase()==req.session.captcha) //且数据库有此信息则登录成功
     {res.send('登录成功')} 
     else {res.send('验证码不正确')}
})
module.exports = router