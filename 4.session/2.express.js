var express = require('express');
var session = require('express-session');
var app = express();
//当你使用session中间件之后，会在req.session属性
//req.session就是此客户端在服务器端对应的数据对象
app.use(session({
    resave:true,//每次请求的时候都会重新保存session
    saveUninitialized:true,//不管用不用都 进行初始化。
    secret:'zfpx' //加密cookie
}));
app.get('/write',function(req,res){
    //给req.session属性赋值就相当于写session
   req.session.name = 'zfpx';
   res.send('ok');
});
app.get('/read',function(req,res){
  res.send(req.session.name);
});
app.get('/hair',function(req,res){

});
app.listen(8080);