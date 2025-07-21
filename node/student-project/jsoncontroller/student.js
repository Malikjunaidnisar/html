const express=require('express');
const studentRouter = express.Router()
const {Student} =require('../model/Student.js')
const {Teacher} =require('../model/Teacher.js')
const {Admin} =require('../model/Admin.js')
const {auth}=require('../jsonmiddleware/auth.js')
const {whatRole}=require('../jsonmiddleware/whatrole.js')
const {isAdmin}=require('../jsonmiddleware/isAdmin.js')
studentRouter
.get('/',auth,whatRole,async (req,res)=>{
try{
	
	if(req.sturole||req.teachrole){
		let pageDetails ={
		            title:req.sturole?'Students':'Teachers',
		            heading:`List of ${req.sturole?'Students':'Teachers'}`
		         }
		
		         //let stu-teach = stu.r
		        let info = req.sturole? await Student.find({}):await Teacher.find({})
		        
		        return res.status(200).render('students',{pageDetails,info,err:false})
		

	}
	if(req.adminrole){
		if(req.adminrole){
		        let pageDetails ={
		            title:'All Students',
		            heading:'All Student List'
		        }
		        let info = await Student.find({})
		        
		        return res.status(200).render('adminstudent',{info,pageDetails})
		    }

	}
}
catch(err){
	return res.status(500).send('server is down pls try again in a short time')
}
	
})
	
.get('/newstudentandstaff',auth,isAdmin,(req,res)=>{
	res.render('newstudentAndstaff')

})

.post('/newstudentAndstaff',auth,isAdmin,async(req,res)=>{
	
	if(req.body.role=== 'student'){
		const newStudent ={
			firstname:req.body.firstName,
			lastname:req.body.lastName,
			email:req.body.email,
			phoneno:req.body.phoneno,
			city:req.body.city,
			role:req.body.role,
			education:req.body.education,
			image:`static/${req.body.profileImage}`
		}
		await Student.create(newStudent)
		return res.status(201).send(`New Student created succesfully<br /><br /><a href="/student">Back to Student page</a>`)
	}
	if(req.body.role=== 'teacher'){
		const newTeacher ={
		          firstname:req.body.firstName,
		          lastname:req.body.lastName,
		          email:req.body.email,
		          phoneno:req.body.phoneno,
		          city:req.body.city,
		          role:teq.body.role,
		          education:req.body.education,
		          image:`static/${req.body.profileImage}`
		      }
		      await Teacher.create(newTeacher)
		      return res.status(201).send(`New Teacher created succesfully<br /><br /><a href="/student">Back to Student Page</a>`)

	}
	if(req.body.role=== 'admin'){
		const newAdmin ={
		          firstname:req.body.firstName,
		          lastname:req.body.lastName,
		          email:req.body.email,
		          phoneno:req.body.phoneno,
		          city:req.body.city,
		          role:teq.body.role,
		          education:req.body.education,
		          image:`static/${req.body.profileImage}`
		      }
		      await Admin.create(newStudent)
		      return res.status(201).send(`New Admin created succesfully<br /><br /><a href="/student">Back to Student Page</a>`)

	}
	return res.status(400).redirect('/home')
})
.get('/:id',auth,isAdmin,async (req,res)=>{
	if(!req.params.id){
		return res.redirect('adminstudent')
	}
	const inf = await Student.findOne({_id:req.params.id})
	
	let pageDetails ={
		title:inf.firstname,
		heading:'Profile Page',
		role:'admin'
	}
	
	
	return res.render('updateprofile',{inf,pageDetails})
})

.get('/:id/studentform',auth,isAdmin,async (req,res)=>{
	try{
	const inf = await Student.findOne({_id:req.params.id})
	return res.render('studentform',{inf,err:false})
	}
	catch(err){
		return res.status(400).send('Server is down Pls try again in a short time')
	}
})	
/*.post('/:id/studentform',(req,res)=>{
	res.send('post')
})*/ 
.put('/:id/studentform',auth,isAdmin,async (req,res)=>{
try{
	
	let studentInfo = await Student.findOne({_id:req.params.id})
	
	let updateInf = {
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		email:req.body.email,
		phoneno:req.body.phoneno,
		role:req.body.role,
		education:req.body.education,
		city:req.body.city,
		image:`static/${req.body.profileImage}`
	}
	await Student.updateOne({_id:req.params.id},updateInf)
	res.status(203).redirect('/student')
	//console.log(u)
	//console.log(await Student.findOne({_id:req.params.id}))
	
}
catch(err){
return res.status(400).send('catch Server is down Pls try again in a short time')
		
}
	
	
	
})
.delete('/:id/delete',auth,isAdmin,async (req,res)=>{
	try{
		await Student.deleteOne({_id:req.params.id})
	
	res.send('delete')
	}
	catch(err){
		return res.status(400).send('Server is down Pls try again in a short time')
		
	}
})

module.exports={studentRouter}