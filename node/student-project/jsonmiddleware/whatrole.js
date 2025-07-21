let signature = 'studentapp'
const jwt =require('jsonwebtoken')
const {Student} =require('../model/Student.js')
const {Teacher} =require('../model/Teacher.js')
const {Admin} =require('../model/Admin.js')

async function whatRole(req,res,next){
	const {token}=req.cookies
	if(!token){
	return res.status(404).render('home',{err:true,message:'Access denied'})
	}
	const verify=jwt.verify(token,signature)
	req.email=verify.email
	try{
		
	const student = await Student.findOne({email:req.email})
	const teacher = await Teacher.findOne({email:req.email})
	const admin = await Admin.findOne({email:req.email})
	
//	const teacher = teachers.find(teach=>teach.email === req.email)
//	const admin = admins.find(adm=>adm.email === req.email)
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
	let pageDetails = {
			title:'Home Page',
	 		heading:'Recent Activity',
	 		cardHeading:'Welcome User',
			cardBody:'From Bait-us-Salam we welcome you',
			item1:'Free IT',
			item2:'Free Old House Servises',
			item3:'Free Medical Services',
	
	         }
		
	return res.status(404).render('home',{pageDetails,err:true,message:'Access denied'})
	}
	}
	catch(err){
		return res.status(500).send('Server is down try again in a short time')
	}
}
module.exports={whatRole}