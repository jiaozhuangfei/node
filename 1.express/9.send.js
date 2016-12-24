var express = require('express');
var _server = require('_http_server');
var app = express();
var users = [
    {id:1,name:'zfpx1'},
    {id:2,name:'zfpx2'},
    {id:3,name:'zfpx3'}
]
app.use(function(req,res,next){
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
    res.send(404);
});


app.listen(8080);