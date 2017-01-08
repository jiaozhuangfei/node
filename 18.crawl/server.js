/**
 * 1.建立一个web服务器，展示我们的数据
 * 2.启动一个计划任务，每隔一小时更新一下数据库
 */

let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies});
    });
});
app.listen(9090);