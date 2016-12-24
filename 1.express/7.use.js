var express = require('express');
var app = express();
// 中央 100
/**
 * 中间件里可以放路径，但这个路径的含义是只要请求的URL以这个
 * 路径开头就可以
 */
app.use('/user',function(req,res,next){
   req.money = 100;
    console.log('中央',req.url);
   next();
});
// 省 50
app.use('/user',function(req,res,next){
    req.money -=50;
    // next参数表示任务出错了，跳过后面正常的中间件，会执行错误处理中间件
    next('失火了');
});
// 市 100
app.use('/user',function(req,res,next){
    console.log('市');
    req.money -=30;
    next();
});
// 村 100
app.use('/user',function(req,res,next){
    console.log('村');
    req.money -=20;
    next();
});
// 民 100
app.use('/user',function(req,res,next){
    console.log('民');
    res.end('恭喜你获得了'+req.money+'元');
});
//错误处理中间件
app.use('/user',function(err,req,res,next){
   console.log(err);
   res.end('错误:'+err);
});
app.listen(8080);