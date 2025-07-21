const mongoose= require('mongoose');
const Schema= mongoose.Schema
const userScehma = new Schema({
	firstname:{
		type:String,
		required:true
	},
	lastname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		require:true,
		
	}
})
const User = mongoose.model('user',userScehma)
let users = [
	{
		firstname:"Malik",
	 	lastname:"Junaid",
	 	email:"sayaandtrain1@gmail.com",
	 	password:1234
	},
	{
	 	firstname:"farhan",
	  	lastname:"sahab",
	  	email:"farhan@gmail.com",
	  	password:1234
	},
	{
	    firstname:"Ayaz",
	    lastname:"sarwar",
	    email:"ayaz@gmail.com",
	    password:1234,
	    role:'teacher',
	    id:1
	 },
	 {
	    firstname:"Danish",
	    lastname:"sahab",
	    email:"danish@gmail.com",
	    password:1234,
	    role:'admin',
	    id:1
	 }
	       
]
module.exports={User}