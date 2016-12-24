var express = require('express');
//调用工厂方法生成一个路由容器的实例,这个实例也是一个中间件函数
var router = express.Router();
// /add
router.get('/add',function(req,res){
    res.end('注册');
});
//登录
router.get('/login',function(req,res){
    res.end('登录');
});
module.exports = router;
