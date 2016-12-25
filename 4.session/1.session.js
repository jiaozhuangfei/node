var express = require('express');
var app = express();
/**
 * 当顾客第一次访问服务器理发店，理发店会发放一张理发卡，余额100.
 * 每消费一次，减去20元
 *
 *
 */
//这是负责存储所有的session数据
var sessions = {};
var SESSION_KEY = 'connect.sid';
app.get('/hair',function(req,res){
   //1.生成一个卡号 1.要求不容易被猜到 2.永远不会重复
   var cardNo = Date.now()+"."+Math.random();
   //在服务端记录此卡号对应的余额
   sessions[cardNo] = {
       money:100 //余额还剩100
   };
   //通过cookie把卡号发给客户端
   res.cookie(SESSION_KEY,cardNo);
   res.send(`亲爱的客人,送你一张理发卡,余额是100元`);
});

app.listen(9090);