const jwt = require('jsonwebtoken')

module.exports =async (req, res, next) => {
    const authHeader = req.get('Authorization')         // look for the Authorization field in the request

    if(!authHeader){
        req.isAuth = false                              // add a different field to the request -- make sure to no overide and existing one
        return next()
    }

    const token =  authHeader.split(' ')[1]                   // Authorization: Bearer jfldajl

    if(!token || token === ''){
        req.isAuth = false
        return next()
    }


    let decodedToken

    try{
        decodedToken = await jwt.verify(token, 'SecureLongSecretKey687');
    }catch(err){
        req.isAuth = false
        return next()
    }

    if(!decodedToken){
        req.isAuth = false
        return next()
    }

    req.isAuth = true
    req.userId = decodedToken.userId
    next()
}