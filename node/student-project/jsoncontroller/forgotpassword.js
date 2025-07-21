const express =require('express')
const forgotPasswordRouter =express.Router()
const {isGuest}=require('../jsonmiddleware/isguest.js')
const {User}=require('../model/User.js')
const nodemailer=require('nodemailer')
forgotPasswordRouter
.get('/',isGuest,(req,res)=>{
    res.render('forgotPassword',{err:false})
})
.post('/',async (req,res)=>{
	try{
		
	const user = await User.findOne({email:req.body.email})

	if(!user){
		return res.status(200).render('forgotPassword',{err:true,message:'Email not found'})
	}
	//console.log(req)
	let  transporter = nodemailer.createTransport({
		service:'gmail',
		auth:{
			user:'sayaandtrain1@gmail.com',
			pass:'gfcd licd ekib ymzr'
		}
	})
	let mailOption ={
		from:'sayaandtrain1@gmail.com',
		to:JSON.stringify(user.email),
		subject:'Your password',
		html:`<p>Dear User pls do not share your password with anyone suspicious<br /><p>Here is your Password to login</p><br /><br />${JSON.stringify(user.password)}`
	}
	transporter.sendMail(mailOption,(err,info)=>{
		if(err){
			console.log(err)
		}
		return res.render('login',{err:false})
	})
	}
	catch(error){
		return res.status(400).render('forgotPassword',{err:true,message:'Server is down Pls try again after some time'})
	}
})
module.exports={forgotPasswordRouter}