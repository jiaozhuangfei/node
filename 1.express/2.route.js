//引入express模块得到一个函数
var express = require('express');
//调用此函数会返回一个新的函数
var app = express();
//定义一个路由 当客户端以GET的请求方式访问/路径的时候执行回应的回调函数

app.get('/',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('首页');
});
app.get('/login',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('登录');
});
app.post('/login',function(req,res){
    res.end('post登录');
});
app.get('/user',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('用户主页');
});

/**
 * all能匹配所有的方法 * 能匹配所有的路径
 */
app.all('*',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('你访问的页面不存在');
});
//在本地监听8080端口，启动http服务器
//app.listen(8080);


var server = require('http').createServer(app);
server.listen(8080);


