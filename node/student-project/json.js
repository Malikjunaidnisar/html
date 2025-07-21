const express =require('express');
const {connectDB} = require('./mongo.js')

const path = require('path')
const jwt= require('jsonwebtoken')
const nodemailer =require('nodemailer')
const cookieParser=require('cookie-parser')
const methodOverride=require('method-override')
const {User}=require('./model/User.js')


const {users}= require('./model/User.js')
const {students}= require('./model/Student.js')
const {teachers}= require('./model/Teacher.js')
const {courses}= require('./model/Course.js')
const {Admin}= require('./model/Admin.js')

//const {auth}= require('./jsonmiddleware/auth.js')
//const {isGuest}= require('./jsonmiddleware/isguest.js')
//const {whatRole}= require('./jsonmiddleware/whatrole.js')

const {profileRouter}= require('./jsoncontroller/profile.js')
const {loginRouter}= require('./jsoncontroller/login.js')
const {logoutRouter}= require('./jsoncontroller/logout.js')
const {courseRouter}= require('./jsoncontroller/course.js')
const {forgotPasswordRouter}= require('./jsoncontroller/forgotpassword.js')
const {studentRouter}= require('./jsoncontroller/student.js')
const {homeRouter}= require('./jsoncontroller/home.js')
const {signupRouter}= require('./jsoncontroller/signup.js')

const app = express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cookieParser())
app.use(methodOverride('_method'))
app.use('/static',express.static('assets'))

app.use('/login',loginRouter)
app.use('/home',homeRouter)
app.use('/profile',profileRouter)
app.use('/course',courseRouter)
app.use('/logout',logoutRouter)
app.use('/forgotpassword',forgotPasswordRouter)
app.use('/student',studentRouter)
app.use('/signup',signupRouter)

/*app.get('/',async (req,res)=>{
	const data = await Admin.create({
	firstname:'Danish',
	lastname:'Sahab',
	email:'danish@gmail.com',
	phoneno:03312817963,
	education:'unknown',
	city:'Karachi',
	role:'Admin',
	})
	const newUser ={
		firstname:'malik',
		lastname:'nisar',
		email:'j@gmail.com',
		password:'1223'
	}
	//await User.create(newUser)
	await User.deleteOne({email:'g@gmail.com'})
	const users = await Admin.find({})
	console.log(users)
})*/

//let signature='studentapp'

/*function auth (req,res,next){
	
    //let {sessionId}=req.cookies
    let {token}=req.cookies


    if(!token){
     	return res.send(`session expired<br /><br /> <a href="/login">back to login</a>`)
    }
    let verify = jwt.verify(token,signature)
    if(!verify){
     	return res.send(`Unauthorize<br /><br /> <a href="/login">back to login</a>`)
    }
    	
    next()
	
}*/

/*function isGuest(req,res,next){
	//let {sessionId}=req.cookies
	try{
	let token =req.cookies.token
	//token = JSON.stringify(token)
	if(!token){

	   return  next()
	}
	let verify = jwt.verify(token,signature)
	if(!verify){
		return res.render('login',{err:true,message:'Please login again'})
	}	
	
	}
	catch(err){
		return res.render('login',{err:false})
	}
	    
	
}*/
/*app.get('/login',isGuest,(req,res)=>{
	//res.render('')
	res.render('login',{err:false})
})*/

/*function whatRole(req,res,next){
	const {token}=req.cookies
	if(!token){
	return res.status(404).render('home',{err:true,message:'Access denied'})
	}
	const verify=jwt.verify(token,signature)
	req.email=verify.email
	const student = students.find(st=>st.email === req.email)
	
	const teacher = teachers.find(teach=>teach.email === req.email)
	const admin = admins.find(adm=>adm.email === req.email)
	if(student){
		req.sturole= student.role
		return next()
	}
	if(teacher){
 		
		req.teachrole =teacher.role
		return next()
	}
	if(admin){
		req.adminrole= admin.role
		return next()
	}
	else{
		
	return res.status(404).render('home',{err:true,message:'Access denied'})
	}
}*/
/*app.get('/student',auth,whatRole,(req,res)=>{
	if(req.sturole||req.teachrole){
		let pageDetails ={
		            title:req.sturole?'Students':'Teachers',
		            heading:`List of ${req.sturole?'Students':'Teachers'}`
		         }
		
		         //let stu-teach = stu.r
		        let info = req.sturole?students:teachers
		        
		        return res.status(200).render('students',{pageDetails,info,err:false})
		

	}
	if(req.adminrole){
		if(req.adminrole){
		        let pageDetails ={
		            title:'All Students',
		            heading:'All Student List'
		        }
		        let info = students
		        return res.status(200).render('adminstudent',{info,pageDetails})
		    }

	}
	
})*/
/*app.post('/login', (req,res)=>{
	    const user = users.find(user=>user.email === req.body.username && user.password === parseInt(req.body.password))
		if(!user){
	    	res.render('login',{err:true,message:'Wrong email or password'})
	    	return
	    }
	    const userdata = {
	    	email:user.email
	    }
	    const token = jwt.sign(userdata,signature)
	    res.setHeader('Set-Cookie',`token=${token};Path=/;HttpOnly;Max-Age=600`)
	    return res.status(200).redirect('/home')
})*/

/*app.get('/logout',(req,res)=>{
	
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
})*/

/*app.get('/home',auth,(req,res)=>{
	let pageDetails = {
	    title:'Home Page',
	        heading:'Recent Activity',
	        cardHeading:'Welcome User',
	        cardBody:'From Bait-us-Salam we welcome you',
	        item1:'Free IT',
	        item2:'Free Old House Servises',
	        item3:'Free Medical Services',
	
	    }
	res.status(200).render('home',{err:false,pageDetails})
})*/
/*app.get('/course',auth,(req,res)=>{
	let pageDetails ={
	    title:'Courses',
	    heading:'List of Courses'
	 }
    res.status(200).render('course',{err:false,pageDetails})
})*/
/*app.get('/forgotPassword',isGuest,(req,res)=>{
	res.render('forgotPassword',{err:false})
//	res.setHeader('Set-Cookie','sessionId=;Path=/;HttpOnly;Max-Age=thu 1970 00:00:00 GMT')
//	console.log(req.cookies)
})*/
/*app.post('/forgotPassword',(req,res)=>{
	const user = users.find(user=>user.email === req.body.email)
console.log(user)
	if(!user){
		res.status(200).render('forgotPassword',{err:true,message:'Email not found'})
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
		text:'dear user here is your password',
		text:JSON.stringify(user.password)
	}
	transporter.sendMail(mailOption,(err,info)=>{
		if(err){
			console.log(err)
		}
		res.render('login',{err:false})
	})
})*/
/*app.get('/signup',(req,res)=>{
	res.render('signup',{err:false})
})
app.post('/signup', (req,res)=>{
	//const readData = await fs.readFile('Users.db')
	//const users = await JSON.parse(readData)
	const userEmail = users.find(user=>user.email === req.body.email)
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
	users.push(newUser)
	//await fs.writeFile('Users.db',JSON.stringify(users))
	res.status(201).render('login',{err:false})
})*/


connectDB()
app.listen(3000,()=>{
	console.log('Server is up')
})
 
