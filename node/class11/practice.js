const express=require('express');
const app= express();
const users=[];
const session ={};
app.use(express.json({exteded:true}))
app.use(express.urlencoded({exteded:true}))
// app.get('/users{/:id}',(req,res)=>{
//     if(!req.params.id){
//         res.send(users)
//         return
//     }
//     const reqUser=users.find(user=>user.name === req.body.name && user.password===req.body.password)
//     if(!reqUser){
//         return res.send('no user detected')
//     }
//     res.send(users)

// })
// app.post('/users',(req,res)=>{
//     let newUser ={
//         name:req.body.name,
//         password:Date.now()
//     }
//     users.push(newUser)
//     res.send(users)
// })

app.get('/users{/:id}',(req,res)=>{
    if(!req.params.id){
        res.send(users)
        return
    }
    const reqUser=users.find(user=>user.password===parseInt(req.params.id))
    if(!reqUser){
        // return res.send('no user detected')
        return res.send(reqUser)
    }
    res.send(reqUser)

})
app.post('/users',(req,res)=>{
    let newUser ={
        name:req.body.name,
        password:Date.now()
    }
    users.push(newUser)
    res.send(users)
})
app.post('/login',(req,res)=>{
    const sessionId=Date.now()
    const reqUser=users.find(user=>user.name === req.body.name && user.password === parseInt(req.body.password))
    session[sessionId]=reqUser
    res.setHeader('Set-Cookie',`sessionId=${sessionId},HttpOnly,Path=/`)
    const Cookie = req.header.Cookie
    res.send(Cookie.toString())
})
app.listen(3000,()=>{
    console.log('Server is working')
})