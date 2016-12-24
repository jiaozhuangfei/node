var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
/*app.use(function(req,res,next){
  var result = '';
  //监听 请求体
  req.on('data',function(data){
      result += data.toString();
  });
  req.on('end',function(data){
      // name=zfpx&age=9  querystring
        req.body = require('querystring').parse(result);
      next();
  });
});*/
/**
 * 向服务器端发起post请求 /login
 *  curl -X POST http://localhost:8080/login
 * 向服务器传请求体
 * curl -X POST --data "name=zfpx" http://localhost:8080/login
 */
app.post('/login',function(req,res){
  console.log(req.body);
  res.end('login');
});
app.listen(8080);