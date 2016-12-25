var http = require('http');
var server = http.createServer(function(req,res){
   var pathname = require('url').parse(req.url).pathname;
   //服务器向客户端写入cookie
   if(pathname == '/write'){
     //通过响应头中的set-cookie 向客户端写入cookie，客户端把cookie保存在本地
     res.setHeader('Set-Cookie','name=zfpx');
     res.end('写入cookie')
   //服务器读取客户端传过来的cookie
   }else if(pathname == '/read'){
       //客户端 请求服务器的时候，会把自己本地保存的cookie通过请求头中的cookie字段发给服务器
       // Cookie  取请求的时候时候全部按小写来取即可
        console.log(req.headers.cookie);
        res.end(req.headers.cookie);
   }else{
       res.end('404');
   }
})
server.listen(8080);