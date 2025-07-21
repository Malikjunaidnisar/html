const jwt = require('jsonwebtoken')
let signature='studentapp'
function isGuest(req,res,next){
    let token =req.cookies.token
	
    
    
    try{
    let token =req.cookies.token
    
    if(!token){
	
       return  next()
    }
    let verify = jwt.verify(token,signature)
    if(!verify){
    
        return res.render('login',{err:true,message:'Please login again'})
    }
	return res.redirect('/home')
    }
    catch(err){
    	
        return res.render('login',{err:false})
    }

	
}
module.exports={isGuest}