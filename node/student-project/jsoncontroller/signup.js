const express = require('express')
const signupRouter = express.Router()
const {isGuest}= require('../jsonmiddleware/isguest.js')
const {User}= require('../model/User.js')
signupRouter
.get('/',isGuest,(req,res)=>{
	res.render('signup',{err:false})
})
.post('/', async (req,res)=>{
	//const readData = await fs.readFile('Users.db')
	//const users = await JSON.parse(readData)
	try{
		
	const userEmail = await User.findOne({email:req.email})
	if(userEmail){
	res.render('signup',{err:true,message:'Email exists'})
	return
	}
	const newUser={
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		email:req.body.email,
		password:req.body.password
	}
	await User.create(newUser)
	
	//await fs.writeFile('Users.db',JSON.stringify(users))
	res.status(201).render('login',{err:false})
	}
	catch(err){
	return res.render('signup',{err:true,message:'Email exists'})
	
	}
})
module.exports={signupRouter}