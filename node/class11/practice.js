const express=require('express');
const app= express();
const users=[];
const session ={};
app.use(express.json({exteded:true}))
app.use(express.urlencoded({exteded:true}))
app.get('/users{/:id}',(req,res)=>{
    if(!req.params.id){
        res.send(users)
        return
    }
    const reqUser=users.find(user=>user.name === req.body.name && user.password===req.body.password)
    if(!reqUser){
        return res.send('no user detected')
    }
    res.send(users)

})
app.post('/users',(req,res)=>{
    let newUser ={
        name:req.body.name,
        password:Date.now()
    }
    users.push(newUser)
    res.send(users)
})
app.listen(3000,()=>{
    console.log('Server is working')
})