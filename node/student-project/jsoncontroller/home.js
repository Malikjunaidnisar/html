const express=require('express');
const homeRouter=express.Router()
const {auth}=require('../jsonmiddleware/auth.js');
homeRouter
.get('/',auth,(req,res)=>{
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
})
module.exports={homeRouter}