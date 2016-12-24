var express = require('express');
//router是一个中间件函数
var router = express.Router();
//增加文章
router.get('/add',function(req,res){
  res.end('增加文章');
});
//删除文章
router.get('/delete',function(req,res){
    res.end('删除文章');
});
module.exports = router;