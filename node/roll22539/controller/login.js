const express=require('express')
const loginRouter = express.Router()





const path = require('path')
const fs = require('fs').promises;

const { readFile, writeFile } = require('fs').promises



loginRouter
.get('/',(req,res)=>{
    //const user = await readFile(path.join(__dirname,'model/User.json'),'utf-8')
    //const user = path.join(__dirname,'model/User.json')
    res.render('login',{err:false})
})

.post('/',async (req,res)=>{
    let sessions = await readFile(path.join(__dirname,'../sessions.json'))
     sessions = JSON.parse(sessions)
    
    const userData = await readFile(path.join(__dirname,'../model/User.json'),'utf-8')
    
    const users = JSON.parse(userData)
    const user = users.find(u=>u.email=== req.body.email && u.password === parseInt(req.body.password))
   
    if(!user){
        return res.render('login',{err:true,message:"user not found"})
    }
  
    let sessionid= Date.now()
    sessions[sessionid]=user
    res.setHeader('Set-Cookie',`sessionId=${sessionid};HttpONLY;path=/;Max-Age=60000`)
   
    return res.redirect('/dashboard')
})

module.exports={loginRouter}