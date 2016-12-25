var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req,res){
    var pathname = require('url').parse(req.url).pathname;
    /**
     * 客户端第1次访问，返回 欢迎 第1次访问
     * 客户端第2次访问，返回 欢迎 第2次访问
     * ....
     * 1.当客户端第一次访问的时候，服务器向客户端 写一个cookie  visit=1
     * 2.当客户端再次访问的时候，服务器先读出来原来写的cookie visit,得到原来的值，加1并重新写回客户端
     */
    if(pathname == '/visit'){
        //定义初始值为1
        var visit = 1;
        //判断请求头中的cookie字段有没有值
        if(req.headers.cookie){ // visit=1
            // {visit:1} 把cookie从字符串转成对象
            //Cookie:name=zfpx; visit=1
            var cookieObj = querystring.parse(req.headers.cookie,"; ");
            if(cookieObj.visit){//如果对象的visit属性
                visit = parseInt(cookieObj.visit)+1;//在原来基础上+1
            }
        }
        //向客户端更新响应头
        res.setHeader('Set-Cookie',`visit=${visit}`);
        res.end(`亲爱的客人，这是你的第${visit}次访问`);
    }else{
        res.end('404');
    }
})
server.listen(8080);