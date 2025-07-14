const express=require('express')
const path=require('path')
const {userRouter} =require('./controller/users.js')
const app =express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
const users=[]
/**
 * user routes
 */

/**
 * user get all user
 */

app.use('/users',userRouter)
app.listen(3000,()=>{
    console.log('server is up')
})