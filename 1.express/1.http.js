var http = require('http');
var url = require('url');
//创建一个web服务器
/**
 * / 返回一个字符串  首页
 * /login 返回一个字符串  登录
 * /user 返回一个字符串  用户
 */
var server = http.createServer(function(req,res){
    // http://localhost:8080/login?name=zfpx&age=8
    //把一个URL字符串转成URL对象
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    //响应头中的内容类型，用来告诉浏览器我这个网页编码是什么
    res.setHeader('Content-Type','text/html;charset=utf8')
    //路由 根据客户端不同的请求URL，返回不同的内容
    if(pathname == '/'){
        res.end('首页');
    }else if(pathname == '/login'){
        res.end('登录');
    }else if(pathname == '/user'){
        res.end('用户页');
    }
})
//端口是用来区分同一台服务器上的不同服务应用的
server.listen(8080);