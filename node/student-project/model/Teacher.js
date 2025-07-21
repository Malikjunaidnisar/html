const mongoose = require('mongoose');
const Schema = mongoose.Schema
const teacherSchema=new Schema({
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
	role:{
		type:String,
		required:true
	},
	image:{
		type:String,
	}
})

const Teacher = mongoose.model('teachers',teacherSchema)
let teachers =[
      {
          firstname:"Ayaz",
          lastname:"sarwar",
          email:"ayaz@gmail.com",
          password:1234,
          role:'teacher',
          id:1
      }
 ]
 module.exports={Teacher}