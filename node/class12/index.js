const express=require('express');
const app= express();
let course=[];
const session ={};
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
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

// app.get('/users{/:id}',(req,res)=>{
//     if(!req.params.id){
//         res.send(users)
//         return
//     }
//     const reqUser=users.find(user=>user.password===parseInt(req.params.id))
//     if(!reqUser){
//         // return res.send('no user detected')
//         return res.send(reqUser)
//     }
//     res.send(reqUser)

// })
// app.post('/users',(req,res)=>{
//     let newUser ={
//         name:req.body.name,
//         password:Date.now()
//     }
//     users.push(newUser)
//     res.send(users)
// })
// app.post('/login',(req,res)=>{
//     const sessionId=Date.now()
//     const reqUser=users.find(user=>user.name === req.body.name && user.password === parseInt(req.body.password))
//     session[sessionId]=reqUser
//     res.setHeader('Set-Cookie',`sessionId=${sessionId},HttpOnly,Path=/`)
//     const Cookie = req.header.Cookies
//     res.send(Cookie.toString())
// })
app.set("view engine","ejs")
// app.set(__dirname + '/views')
let products=[
    {name:"Red shoes",price:'Rs. 1499',path:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",title:'red shoes'},
    {name:"whote shoes",price:'Rs. 1499',path:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",title:'white'}

]
app.get('/',(req,res)=>{
    const course =['psdc','shopify','product']
    res.render('products',{
        products,
        course
    })
    //res.send('me')
})
app.listen(3000,()=>{
    console.log('Server is working')
})