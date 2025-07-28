const express=require('express')
const dashboardRouter = express.Router()



const path = require('path')
const fs = require('fs').promises;

const { readFile, writeFile } = require('fs').promises


dashboardRouter
.get('/',async (req,res)=>{
    //const user = await readFile(path.join(__dirname,'model/User.json'),'utf-8')
    //const user = path.join(__dirname,'model/User.json')
    const {sessionId} = req.headers.cookie
    console.log(cookie)
    if(!cookie){
        res.render('login',{err:true,message:'session timeout'})

    }
    let users = await readFile(path.join(__dirname,'../model/User.json'),'utf-8')
    users = JSON.parse(users)
    const user = users.find(u=>u.email)
    res.render('contact',{err:false})
})
module.exports={dashboardRouter}