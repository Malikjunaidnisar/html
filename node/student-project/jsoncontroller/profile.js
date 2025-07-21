const express = require('express');
const profileRouter = express.Router()
const {Student} = require('../model/Student.js')
const {Teacher} = require('../model/Teacher.js')
const {Admin} = require('../model/Admin.js')
const {auth}= require('../jsonmiddleware/auth.js')
const {whatRole}= require('../jsonmiddleware/whatrole.js')



profileRouter.use(auth,whatRole)
.get('/',async (req,res)=>{
	const student=await Student.findOne({email:req.email})
	const teacher=await Teacher.findOne({email:req.email})
	const admin=await Admin.findOne({email:req.email})
	console.log(student)
	console.log(teacher)
	console.log(admin)
	
	
	if(!student && !teacher && !admin){
		let pageDetails = {
		          title:'Home Page',
		          heading:'Recent Activity',
		          cardHeading:'Welcome User',
		          cardBody:'From Bait-us-Salam we welcome you',
		          item1:'Free IT',
		          item2:'Free Old House Servises',
		          item3:'Free Medical Services',
		
		         }
		return res.status(400).render('home',{err:true,message:'Access Denied',pageDetails})
	}
	
		
	let pageDetails={
		title:student?`Profile || ${student.firstname} ${student.lastname}`:teacher?`Profile || ${teacher.firstname} ${teacher.lastname}`:`Profile || ${admin.firstname} ${admin.lastname}`,
		heading:student?`${student.firstname} ${student.lastname}`:teacher?`${teacher.firstname} ${teacher.lastname}`:`${admin.firstname} ${admin.lastname}`
				
	}
	
	if(student){
		let inf = student 
		return res.status(200).render('profile',{inf,pageDetails})
	}
	if(teacher){
	let inf = teacher
	        return res.status(200).render('profile',{inf,pageDetails})
	}
	if(admin){
	let inf = admin
	        return res.status(200).render('profile',{inf,pageDetails})
	}
	/*let pageDetails = {
	          title:'Home Page',
	          heading:'Recent Activity',
	          cardHeading:'Welcome User',
	          cardBody:'From Bait-us-Salam we welcome you',
	          item1:'Free IT',
	          item2:'Free Old House Servises',
	          item3:'Free Medical Services',
	
	         }
	return res.status(400).render('home',{pageDetails,err:true,message:'Access denied'})*/
	
})
module.exports={profileRouter}