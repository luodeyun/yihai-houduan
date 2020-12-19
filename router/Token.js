//1.安装jwt（jsonwebtoken）
//2.使用jwt中的两个方法加密和解密token
const jwt = require('jsonwebtoken')
Token = {
    en(str) { //加密Token
        let tokenKey = jwt.sign(str, 'apachesdda')
        return tokenKey
    },
    de(token) { //解密token
        try {
            let tokenKey = jwt.verify(token, 'apachesdda');
                return {
                    status: 'success',
                    tokenKey
                }
        }catch{
            return{
                status:'faile'
            }
        }      
    }
}
module.exports =Token