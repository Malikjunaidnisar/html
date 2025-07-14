const express =require('express');
const userRouter = express.Router()

function middleware(req,res,next){
    console.log('middle ware')
    next()
}
userRouter.use(middleware)
.get('/',(req,res)=>{
    
    res.render('index')
})
.get('/:id',(req,res)=>{
    
    res.send(`get user${req.params.id}`)
})
.post('/',(req,res)=>{
    res.send('user add')
})
.patch('/:id',(req,res)=>{
    res.send('user update')
})
.delete('/:id',(req,res)=>{
    res.send('user update')
})
module.exports={userRouter}