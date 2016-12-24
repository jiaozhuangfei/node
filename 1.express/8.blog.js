/**
 * 用户注册
 *     登录
 *     退出
 *     找回密码
 * 文章发表
 *     删除
 *     增加
 *     查询
 *     评论
 **/
var express = require('express');
var app = express();
var user = require('./routes/user')
//如果客户端访问的路径是以/user开头的话，
app.use('/user',user);
//如果客户端访问的路径是以/article开头的话，
app.use('/article',);

app.listen(8080);