const express = require('express');
const multer = require('multer')
const {Applicant} =require('../model/Applicant.js')
const courseRouter = express.Router()
//const 
const storage= multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'assets/')
	},
	filename:function(req,file,cb){
	const suffix=Date.now()
		cb(null,suffix + file.originalname)
	}
})
const uploads = multer({storage})
const {auth}= require('../jsonmiddleware/auth.js')
courseRouter
.get('/',auth,(req,res)=>{
    let pageDetails ={
        title:'Courses',
        heading:'List of Courses'
     }
    res.status(200).render('course',{err:false,pageDetails})
})
.get('/courseapplication',auth,(req,res)=>{
	res.status(200).render('application')
})
.post('/courseapplication',uploads.fields([{name:'profileImage'},{name:'uploadedFiles'}]),async (req,res)=>{
	try{
		const applicantInfo ={
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			email:req.body.email,
			phoneno:req.body.phoneno,
			education:req.body.education,
			city:req.body.city,
			image:`/static/${req.files.profileImage[0].filename}`,
			documents:`/static/${req.files.uploadedFiles[0].filename}`
		}
		const newApplicant = await Applicant.create(applicantInfo)
		//const applicants = await Applicant.find({})
		
		return res.status(201).send(`Application is succesfully send<br/><br/><a href='/home'>Back to Homepage</a>`)
	}
	catch(error){
		return res.status(400).render('application')
	}
	
})
module.exports={courseRouter}