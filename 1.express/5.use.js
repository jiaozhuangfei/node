var express = require('express');
var app = express();
/**
 * 我现在在控制台输出响应的总耗时时间
 * 中间件
 * 1. 执行一些公共的逻辑，比如设置内容类型
 * 2. 添加一些公共的方法和属性 req.query req.path req.send
 * 3. 还可以覆盖一些原有方法，插入我们自己的逻辑
 */
app.use(function(req,res,next){
   res.start = Date.now();
   //先缓存原来系统的end方法
   var end = res.end;
   //重写 end方法
   res.end = function(){
        //调用原来的end方法，并且把this指向res,把参数传入
        end.apply(res,arguments);
       //输出总耗时
       console.log(Date.now() - res.start);
   }
   next();
});
app.get('/home',function(req,res){
    res.end('home');
});

app.listen(8080);