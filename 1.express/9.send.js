var express = require('express');
var _server = require('_http_server');
var path = require('path');
var fs = require('fs')
var app = express();
var users = [
    {id:1,name:'zfpx1'},
    {id:2,name:'zfpx2'},
    {id:3,name:'zfpx3'}
]
/*app.use(function(req,res,next){
    //send方法可以任何类型的参数,并转成字符串
    res.send = function(data){
      var type = typeof data;
      switch(type){
          case 'object':
              //如果对象，会调用stringify转成字符串
              data = JSON.stringify(data);
              break;
          case 'number':
              // 如果是数字，会把此数字当成状态码
              res.statusCode = data;//200
              data = _server.STATUS_CODES[data];
      }
      res.end(data);
    }
    next();
});*/
app.get('/',function(req,res){
  /*fs.readFile('./index.html',function(err,data){
     res.setHeader('Content-Type','text/html;charset=utf-8');
     res.end(data);
  })*/
  //fs.createReadStream('./index.html').pipe(res);
    //path must be absolute or specify root to res.sendFile
    //或者指定一个绝对路径
    //res.sendFile(path.resolve('index.html'));
    //写相对路径，但要指定是相对于哪个绝对路径的相对路径
    res.sendFile('index.html',{root:__dirname});
});
// /users
app.get('/users',function(req,res){
    res.send(users);
});
app.get('/users/:id',function(req,res){
    var id = req.params.id;
    var user = users.find(item=>item.id == id);
    res.send(user);
});
app.all('*',function(req,res){
    //使用系统自带的原因短语
    //res.sendStatus(404); Not Found
    //指定状态码，并自己提供响应体
    res.status(404).send('你访问的页面不存在');
});


app.listen(8080);