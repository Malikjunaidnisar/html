const express = require('express');
const app = express()
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/login',(req,res)=>{
    console.log(req.body)
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.post('/signup',(req,res)=>{
    console.log(req.body)
})
app.listen(3000,()=>{
    console.log('server is up')
})