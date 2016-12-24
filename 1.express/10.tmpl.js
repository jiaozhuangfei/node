var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//设置模板引擎 ejs
app.set('view engine','ejs');
//模板的存放目录的绝对路径
app.set('views',path.resolve('views'));
var users = [
    {id:1,name:'zfpx1'},
    {id:2,name:'zfpx2'},
    {id:3,name:'zfpx3'}
]
/**
 * 1.拼出来模板绝对路径
 * 2.从硬盘上读出此模板，得到模板字符串
 * 3.把模板字符串中的变量替换真实的值，真实的值从对象而来
 * 4.把替换后的字符串返回给客户端
 */
/*app.use(function(req,res,next){
   res.render = function(tmplPath,data){
      //1.先得到模板绝对路径=模板存放根目录+
      var realPath = path.join(app.get('views'),tmplPath);
      //拼接上后缀名 得到完整的模板绝对路径
      realPath = realPath+'.'+app.get('view engine');
      console.log(realPath);
      fs.readFile(realPath,'utf8',function(err,tmpl){
          tmpl = tmpl.replace(/<%=(\w+)%>/g,function(){
               return data[arguments[1]];
          });
           res.end(tmpl);
      })
   }
   next();
});*/
app.get('/users',function(req,res){
    //1 参数是模板的相对路径 2 参数是数据对象
    //模板中的变量会从数据对象的属性取值
    //模板的渲染把静态模板里的变量用数据对象的属性替换掉
   res.render('user',{users:users});
});

app.listen(8080);