const http =require('http');
const server= http.createServer((req,res)=>{
    res.end('im learing')
})
const port=3000;
server.listen(port,()=>{
    console.log('server is running')
})
