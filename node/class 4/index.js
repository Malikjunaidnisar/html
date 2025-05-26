const http =require('http');
const PORT =3000;
const server=http.createServer((req,res)=>{
    if(req.method=='POST'){
        let data=''
    }
    req.on('data',(chunk)=>{
        data=data+chunk
    })
    req.on('end',()=>{
        
    })
    console.log(data)
    res.end('') 
});
server.listen(PORT,()=>{
    console.log(`Server is running on 3000`)
});
