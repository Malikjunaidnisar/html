const express = require('express');
const app = express();
const users =[];
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
app.get('/users{/:id}',(req,res)=>{
    res.send(JSON.stringify(users))
})

app.post('/users',(req,res)=>{
    const newUser ={
        id:Date.now(),
        name:req.body.name,
        last:req.body.last
    }
    users.push(newUser)
    res.send(users)
})
// app.get('/users',(req,res)=>{
//     res.send(JSON.stringify(users))
// })
app.listen(3000,()=>{
    console.log('server is up')
})