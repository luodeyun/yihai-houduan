let { Router} = require('express')
var svgCaptcha = require ('svg-captcha')
let router = new Router()
router.get('/captcha',async(req,res)=>{
    var captcha = svgCaptcha.create({noise:3,background: '#aa9986',color:true});
    console.log(req.session);
    req.session.captcha = captcha.text.toLowerCase()
    res.type('svg');
    console.log("captcha:",req.session)
	res.status(200).send(captcha.data);
})
router.post('/login',async(req,res)=>{
    const {phone,password,code} = req.body
     console.log(req.session);   
     if(code.toLowerCase()==req.session.captcha)
     {res.send('登录成功')} 
     else{res.send('验证码不正确')}
})
module.exports = router