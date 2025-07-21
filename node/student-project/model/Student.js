const mongoose= require('mongoose')
const Schema = mongoose.Schema
const studentSchema = new Schema({
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
	phoneno:{
		type:Number,
		required:true
	},
	role:{
		type:String,
		required:true
	},
	education:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	image:{
		type:String
	}
})
const Student = mongoose.model('students',studentSchema)
let students =[
	{
		firstname:"Malik",
	    lastname:"Junaid",
	    email:"sayaandtrain1@gmail.com",
	    password:1234,
	    role:'student',
	    id:1,
	    desc:'Student of Psdc'
	},
	{
	    firstname:"Malik",
	    lastname:"Haris",
	    email:"sayaandtrain1@gmail.com",
	    password:1234,
	    role:'student',
	    id:2,
	    desc:'Student of Shopify'
	}
]
module.exports={students,Student}