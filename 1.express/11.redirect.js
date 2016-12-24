var express = require('express');
var app = express();
/*app.use(function(req,res,next){
    res.redirect = function(newPath){
        //设置302状态码
      res.statusCode = 302;
      //通过响应头的Location字符告诉 客户端 重新向哪个路径发起请求
      res.setHeader('Location',newPath);
      res.end();
    }
    next();
});*/
app.get('/',function(req,res){
  res.send('welcome');
})
app.all('*',function(req,res){
    res.redirect('/');
})
app.listen(8080);