const express = require('express')
const {User}=require('../model/User.js')
const {users}=require('../model/User.js')
const jwt = require('jsonwebtoken')
let signature = 'studentapp'
const {isGuest}= require('../jsonmiddleware/isguest.js')
const loginRouter = express.Router()

loginRouter
.get('/',isGuest,(req,res)=>{
    
    res.render('login',{err:false})
})
.post('/', async (req,res)=>{
		try{
			
        const user = await User.findOne({email:req.body.username})
       // const user = await users.find(user=>user.email ===req.body.username)
		
        if(!user){
            res.render('login',{err:true,message:'Wrong email or password'})
            return
        }
        const passwordMatch= user.password=== req.body.password
        if(!passwordMatch){
            res.render('login',{err:true,message:'Wrong email or password'})
            return
        }
        const userdata = {
            email:user.email
        }
        const token = jwt.sign(userdata,signature)
        res.setHeader('Set-Cookie',`token=${token};Path=/;HttpOnly;Max-Age=600`)
        return res.status(200).redirect('/home')
		}
		catch(error){
			res.status(400).render('login',{err:true,message:'server is down try again in a short time'})
		}
})
 module.exports={loginRouter}