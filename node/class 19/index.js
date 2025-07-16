const express = require('express');
const {bodyParser} = require('body-parser')
//const {mongoose} = require('mongoose')
const {db} = require('./bootstrap/db')
const {User} =require('./model/User')
const app = express();
db()
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
//app.use(bodyParser())
app.post('/create',async (req,res)=>{
    console.log(req.body)
    const user = new User({
        name:req.body.name,
        lastname:req.body.lastname
    })
    await user.save()
    res.send('create')
})
app.get('/user',async(req,res)=>{
    const users = await User.find({})
    console.log(users)
    res.send('all users')
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})