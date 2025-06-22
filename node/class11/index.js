const express = require('express');
const fs = require('fs/promises')
const app = express();
const port = 3000;
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))
app.post('/users',async(req,res)=>{
    const readData = await fs.readFile('users.txt')
    const users = JSON.parse(readData)
    const newUser = {
        name:req.body.name
    }
    users.push(newUser)
    await fs.writeFile('users.txt',JSON.stringify(users))
    res.end(users)
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})