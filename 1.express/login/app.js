var express = require('express');
var app = express();
//注册
app.get('/signup');
app.post('/signup');
//登录
app.get('/signin');
app.post('/signin');
//欢迎页
app.get('/welcome');
app.listen(8080);