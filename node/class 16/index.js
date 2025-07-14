const express= require('express');
const cookieParser = require('cookie-parser')
//const crypto =require('crypto')
const jwt = require('jsonwebtoken')
const app = express();
const signature="password"
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
app.use(cookieParser())

let  users=[
  {
    id:1,
    name:'malik'
  }
]
//const sessions ={}
function isGuest(req,res,next){

// if(userToken){
// 		return res.redirect('/profile')
// 	}
//console.log(userToken)
try {
    const userToken=req.cookies.token
    console.log(userToken)
} catch (error) {
    
}
	
    // console.log(userToken)
	next()
}
app.get('/login',isGuest,(req,res)=>{
    
  res.send('login')
})
app.post('/login',(req,res)=>{
  const user = users.find(user=>user.id === JSON.parse(req.body.id))
 if(!user)return res.send('invalid user')
 //const sessionId=Date.now()
 //sessions[sessionId] = user
 const token =jwt.sign({user_id:user.id},signature)
 
 res.setHeader('Set-Cookie',`token=${token};HttpOnly;Path=/;Max-Age=3600`)
 res.redirect('/profile')
})
function isAuthenticate(req,res,next){
	const token = req.cookies.token
	// if(!token || ){
	//      return res.redirect('/login')
	// }
	req.userSessionId = sessionId
	next()
}
app.get('/profile',isAuthenticate,(req,res)=>{
	const user =users.find(user=>user.id === sessions[req.userSessionId].id)
	if(!user){
		return res.status('401').send('user not found')
	}
	res.send('profile page')
	
})
app.listen(3000,()=>{
  console.log('server is up')
})