const express = require('express');
const path = require('path')
const fs = require('fs').promises;
const ejs = require('ejs');

const {loginRouter} = require('./controller/login')
const {contactRouter} = require('./controller/contact.js')
const {dashboardRouter} = require('./controller/dashboard.js')

const { readFile, writeFile } = require('fs').promises

const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use('/login',loginRouter)
app.use('/contact',contactRouter)
app.use('/dashboard',dashboardRouter)



app.listen(3000,()=>{
    console.log("Server is running on server 3000")
})
