const mongoose= require('mongoose');
const Schema= mongoose.Schema
const applicantSchema= new Schema({
	firstName:{
		type:String,
		required:true
	},
	lastName:{
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
	},
	documents:{
		type:String
	}
})

const Applicant= mongoose.model('applicants',applicantSchema)

module.exports={Applicant}
