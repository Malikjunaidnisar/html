const express=require('express')
const {userRouter} =require('./controller/users.js')
const app =express()
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