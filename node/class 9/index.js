// const http = require('http');
const express = require('express');
const app = express();
// app.use('/users',(req,res,next)=>{
//     next()
// })
const users =[]
app.get('/users',(req,res)=>{
    // console.log(req.path)
    res.status(200).end(JSON.stringify(users))
})
app.post('/users',(req,res)=>{
    const date = Date().now
    let newUser ={
        name:'malik',
        // id:users.length+1,
        id:Date.now()/1000

    }
    users.push(newUser)
    res.status(201).end(JSON.stringify(newUser))
})
app.patch('/users/:id',(req,res)=>{
    let findUser= users.find(user=>user.id == req.params.id)
    if(findUser){
        findUser.name='haris'
        res.status(200).end(JSON.stringify(findUser))
    }
    else{
        res.send('user not found')
    }
})

app.delete('/users/:id',(req,res)=>{
    let userToDelete = users.findIndex(user=>user.id == req.params.id)
    if(userToDelete != -1){
        res.status(204).send('user delete')
    }
    // res.end(JSON.stringify(userToDelete))
})
app.listen(3000,()=>{
    console.log('im running')
})