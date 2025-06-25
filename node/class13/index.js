const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
app.get('/login',(req,res)=>{
    res.setHeader('Set-Cookie',`sessionId=123;HttpOnly,Path=/`)
    res.send('m')
})
app.get('/user',(req,res)=>{
    //res.redirect('/login')
})
app.listen(3000,()=>{
    console.log('server is up')
})