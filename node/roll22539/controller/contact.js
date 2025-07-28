const express=require('express')
const contactRouter = express.Router()



const path = require('path')
const fs = require('fs').promises;

const { readFile, writeFile } = require('fs').promises


contactRouter
.get('/',(req,res)=>{
    //const user = await readFile(path.join(__dirname,'model/User.json'),'utf-8')
    //const user = path.join(__dirname,'model/User.json')
    const cookie = req.Cookies
    if(!cookie){
        res.render('login',{err:true,message:'session timeout'})

    }
    
    res.render('contact',{err:false})
})
.post('/',async (req,res)=>{
    
    //console.log(data)
    const userData = await readFile(path.join(__dirname,'../model/User.json'),'utf-8')
    const users = JSON.parse(userData)
    const user = users.find(u=>u.email=== req.body.email && u.password === parseInt(req.body.password))
    if(!user){
        return res.render('login',{err:true,message:"user not found"})
    }
    return res.send('home')
})

module.exports={contactRouter}