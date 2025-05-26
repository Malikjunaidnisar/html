const http = require('http');
function parser(req){
    const [path , queries]= req.url.split('?')
    req.path =path
    

}
function requestHandler(req,res){
    parser(req)
    console.log(req.a)
    res.end(req.a)
    // console.log(vara)
}
const server = http.createServer(requestHandler);
const port = 3000;
server.listen(port,()=>{
    console.log('Server is running')
})