const http = require('http');
class MiniExpress{
    constructor(){
        this.routes={
                GET:[],
                POST:[],
        }
    }
    get(path,handler){
        this.routes.GET.push({
            path,
            handler
        })

    }
    reqhandler(req,res){
        const {method,url}=req
        const route =this.routes[method]?.find(r=>r.path == url)
        if(route)route.handler(req,res)
        // res.end(route)
        // console.log(route)

    }
   
    listen(port,cb){
        const server = http.createServer((req,res)=>this.reqhandler(req,res))
        server.listen(port,cb)
    }
}
module.exports={
    MiniExpress
}