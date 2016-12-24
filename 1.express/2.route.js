//引入express模块得到一个函数
var express = require('express');
//调用此函数会返回一个新的函数
var app = express();
//定义一个路由 当客户端以GET的请求方式访问/路径的时候执行回应的回调函数
app.get('/',function(req,res){
    res.end('首页');
});

//在本地监听8080端口，启动http服务器
app.listen(8080);


/*var server = http.createServer(app);
return server.listen(8080);*/


