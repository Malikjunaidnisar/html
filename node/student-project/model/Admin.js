const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const adminSchema= new Schema({
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
		type:String
	}
})

const Admin=mongoose.model('admins',adminSchema)
module.exports={Admin}