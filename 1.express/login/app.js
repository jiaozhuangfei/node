var express = require('express');
var app = express();
//设置模板引擎
app.set('view engine');
//设置模板的存放目录
app.set('views');
//注册
app.get('/signup',function(req,res){
    //模板的相对路径  数据对象
    res.render('signup',{title:'注册'});
});
app.post('/signup');
//登录
app.get('/signin');
app.post('/signin');
//欢迎页
app.get('/welcome');
app.listen(8080);