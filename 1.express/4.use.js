var express = require('express');
var app = express();
var wares = [
    function(req,res,next){
       console.log(1);
       next();
    },
    function(req,res,next){
        console.log(2);
        next();
    }
]
/**
 * 使用一个中间件，中间件就是在执行路由函数之前的函数
 * next也是一个函数
 *   1 因为中间件有可能有异步代码
 *   2 因为中间件需要一个权力，能中止或继续执行任务
 * 中间件里的请求对象和响应对象和路由中的是同一个
 */

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf8');
    next();
});
app.get('/',function(req,res){
    res.end('首页');
});
app.get('/login',function(req,res){
    res.end('登录');
});

for(var i=0;i<wares.length;i++){
    app.use(wares[i]);
}

app.listen(8080);