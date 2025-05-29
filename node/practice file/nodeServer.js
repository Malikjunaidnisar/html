const http = required('http');
const port = 3000;

const server = http.createServer(reqHandler);
server.listen(port,()=>{
    console.log('server is up')
})