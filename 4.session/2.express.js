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
    if(!req.session.money){
        req.session.money=100;
        res.send("新办了一张卡，充值100元")
    }else{
        req.session.money-=20;
        res.send("您卡内剩余"+req.session.money+"元");
    }
});
app.listen(8080);