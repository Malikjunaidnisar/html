const jwt = require('jsonwebtoken')
let signature='studentapp'
function auth (req,res,next){
	
    try{
    	
    
    let {token}=req.cookies
    

    if(!token){
     	return res.send(`session expired<br /><br /> <a href="/login">back to login</a>`)
    }
    let verify = jwt.verify(token,signature)
    if(!verify){
     	
     	return res.send(`session expired<br /><br /> <a href="/login">back to login</a>`)
    }
    req.email = verify.email
    return next()
    }
    catch(err){
    	res.rediect('/login')
    }
	
}
module.exports={auth}