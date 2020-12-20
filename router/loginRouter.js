let {
    Router
} = require('express')
var svgCaptcha = require('svg-captcha')
let customerModel = require('../model/customerModel')

const Token = require('./Token')

let router = new Router()
var md5 = require("md5");
//验证码路由
router.get('/captcha', async (req, res) => {
    var captcha = svgCaptcha.create({
        noise: 3,
        background: '#aa9986',
        color: true
    });
    //存储session  1.第一次浏览器执行登录或注册时留下客户信息存储在数据库中，然后在服务器开启一块内存 该内存供session回话存储使用
    //然后客户的信息存在session那块内存中，接下来给客户端返回一个cookie cookie包含着上一步的回话存储的编号
    //后面是客户端第二次发起请求时，会携带cookie，
    //  上面操作一句代码搞定  req.session 
    req.session.captcha = captcha.text.toLowerCase()
    res.type('svg');
    res.status(200).send(captcha.data);
})
//业务路由----注册
router.post('/register', async (request, response) => {
    // 1.获取用户的输入
    const {
        phone,
        nick_name,
        password,
        re_password,
        code
    } = request.body
    console.log(phone, nick_name, password, re_password, code);
    //2.校验数据的合法性
    //定义正则表达式
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    const nickNameReg = /[\u4e00-\u9fa5]/gm
    const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/
    //使用正则进行校验
    if (!phoneReg.test(phone)) {
        let obj = {
            success: false,
            err: true,
            message: '手机号输入不合法！'
        }
        response.send(obj)
        return
    } else if (!nickNameReg.test(nick_name)) {
        let obj = {
            success: false,
            err: true,
            message: '昵称输入不合法，昵称应为中文'
        }
        response.send(obj)
        return
    } else if (!passwordReg.test(password)) {
        let obj = {
            success: false,
            err: true,
            message: '密码输入不合法，密码应大于6位且小于16位字符'
        }
        response.send(obj)
        return
    } else if (password !== re_password) {
        let obj = {
            success: false,
            err: true,
            message: '两次输入密码不一致'
        }
        response.send(obj)
        return
    } else if (!code.toLowerCase() == request.session.captcha) {
        let obj = {
            success: false,
            err: true,
            message: '验证码输入错误'
        }
        response.send(obj)
    }
    //try里面放可能出现错误的代码，一旦出现错误，会携带着错误信息来到catch中。
    try {
        //3.检查该邮箱是否注册过 

        let finResult = await customerModel.findOne({
            phone
        })
        if (finResult) {
            let obj = {
                success: false,
                err: true,
                message: `注册失败，${phone}手机号已经被注册了`
            }
            response.send(obj)
            return
        } else {

            await customerModel.create({
                phone,
                nick_name,
                password: md5(password)
            })
            let user = {
                phone,
                nick_name
            }
            let tokenKey = Token.en(user)
            let obj = {
                success: true,
                err: false,
                message: `手机号为：${phone}，昵称为:${nick_name}的用户注册成功了！`,
                tokenKey
            }
            console.log(obj);
            
            console.log(`手机号为：${phone}，昵称为:${nick_name}的用户注册成功了！`)
            response.send(obj)
        }
    } catch (err) {
        //1.计数 2.引入警报模块
        console.log(err)
        response.send('阿偶，网络不稳定，稍后重试！')
        response.send('注册成功了！')
    }
})
router.post('/login', async (req, res) => {
    const {
        phone,
        password,
        code
    } = req.body
    if (code.toLowerCase() == req.session.captcha) //且数据库有此信息则登录成功
     {
        let finResult = await customerModel.findOne({
            phone,
            password
        })
      if(finResult){
        let user = {
            phone,
           password
        }
        let tokenKey = Token.en(user)
        let obj={
         phone, tokenKey,message:"登录成功",success:true,err:false,name:finResult.nick_name
        }
        res.send(obj)
      }else{
        obj={
           message:"用户名密码不正确",success:false,err:true
           }
          res.send(obj)
      }
        
       
    } else {
        res.send('验证码不正确')
    }
})
module.exports = router