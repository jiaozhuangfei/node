var express = require('express');
var app = express();
/**
 * 如何获取请求的参数
 */
app.get('/login',function(req,res){
  console.log(req.method);
  // /login?name=zfpx&age=8
  console.log(req.url);//获取完整的URL地址
  console.log(req.path);//获取路径名，其实就是？前面的部分
  console.log(req.query);//查询字符串对象
  console.log(req.headers);//获取请求头对象
  res.end('query');
});
var users = [
    {id:1,name:'zfpx1'},
    {id:2,name:'zfpx2'},
    {id:3,name:'zfpx3'},
    {id:4,name:'zfpx3'}
];

//我要查看某个用户的信息
/*app.get('/user',function(req,res){
   var id = req.query.id;
   var user = users.find(function(item){
       return item.id == id;
   });
   //write end 只能接收字符串或者buffer
   res.end(JSON.stringify(user));
});*/
app.get(/\/user\/\d+/,function(req,res){
    res.end(req.url);
});
//路径参数
app.get('/user/:id/:name',function(req,res){
    var id = req.params.id;
    var name = req.params.name;
    var user = users.find(function(item){
        return item.id == id;
    });
    //write end 只能接收字符串或者buffer
    res.end(JSON.stringify(user));
});


app.listen(8080);