const express = require('express');
const jwt =require('jsonwebtoken')
const logoutRouter = express.Router()
logoutRouter.get('/',(req,res)=>{

    try{

    let  {token} = req.cookies
    let verify=jwt.verify(token,signature)

    if(!verify){

        res.setHeader('Set-Cookie',`token=;Path=/;HttpOnly;Max-Age=0`)
        return res.render('login',{err:true,message:'session expired'})
    }
        res.setHeader('Set-Cookie',`token=;Path=/;HttpOnly;Max-Age=0`)
        res.render('login',{err:false})

    }catch(err){

        res.setHeader('Set-Cookie',`token=;Path=/;HttpOnly;Max-Age=0`)
        res.render('login',{err:false})
    }
})
module.exports={logoutRouter}