const {Admin} = require('../model/Admin.js')
async function isAdmin(req,res,next){
	const admin = await Admin.findOne({email:req.email})
	if(!admin){
		res.status(400).send('Not Authorize')
	}
	return next()
}
module.exports={isAdmin}