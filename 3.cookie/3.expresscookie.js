var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
//规律：基本上所有的中间件模板都是一个函数，调用它才会返回我们需要的中间件函数
// req.cookies属性
app.use(cookieParser());
app.get('/write',function(req,res){
 //向客户端写cookie res.setHeader('Set-Cookie','name=zfpx');
 //res.cookie('name','zfpx');
    //这个cookie归哪个域名所有，向哪此以这些域名为后缀的服务器发请求的时候要带上这些cookie
 //res.cookie('name','zfpx',{domain:'.com'});
 //只有客户端向 /read1路径发请求的时候才要带上cookie
 //res.cookie('name','zfpx',{path:'/read1'});
 //设置过期时间 可以是绝对的时间 10秒后过期
 //res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
 //设置过期时间，相对的过期时间
 //res.cookie('name','zfpx',{maxAge:10*1000});
 // 如果设置了httponly的话，无法通过JS来读写cookie
 res.cookie('name','zfpx',{httpOnly:true});
 res.end();
});
app.get('/read',function(req,res){
    res.send(req.cookies);
});
app.get('/read1',function(req,res){
    res.send(req.cookies);
});

app.get('/read1/:id',function(req,res){
    res.send(req.cookies);
});
//统计客户端访问的次数
app.get('/visit',function(req,res){
  var visit = 1;
  if(req.cookies.visit){
      visit = parseInt(req.cookies.visit)+1;
  }
  res.cookie('visit',visit);
  res.send(`客人，这是你的第${visit}次访问`);
});

app.listen(8080);