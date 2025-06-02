const {MiniExpress} = require('./index')
const app = new MiniExpress()
app.get('/users',(req,res)=>{
    // console.log(req)
    res.end('end')
})
app.listen(3000,()=>{
    console.log('server is up')
})