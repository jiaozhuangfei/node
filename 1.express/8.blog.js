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
var user = require('./routes/user');
var article = require('./routes/article');
//如果客户端访问的路径是以/user开头的话，
app.use('/user',user);
//如果客户端访问的路径是以/article开头的话，
// /article/add  发表文章 /article/delete 删除文章
app.use('/article',article);
//都能匹配所有路径，路由一旦命中就肯定不会向下执行了
/*app.all('*',function(res,res){
    res.end('你访问的页面不存在');
});*/
//中间件如果命中，
app.use(function(res,res,next){
    res.end('你访问的页面不存在');
});
app.listen(8080);