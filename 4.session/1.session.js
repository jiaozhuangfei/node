var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
/**
 * 当顾客第一次访问服务器理发店，理发店会发放一张理发卡，余额100.
 * 每消费一次，减去20元
 *
 */
//这是负责存储所有的session数据
var sessions = {};
var SESSION_KEY = 'connect.sid';
app.get('/hair',function(req,res){
    //取得客户端传过来的卡号
   var oldCardNo = req.cookies[SESSION_KEY];
   if(oldCardNo){
       //查找此卡号对应的数据 余额
       var sessionObj = sessions[oldCardNo];
       //判断此卡号在服务器端有没有对应的记录
       if(sessionObj){
           if(sessionObj.money<20 || Date.now()>sessionObj.expires){
               banKa(res);
           }else{
               sessionObj.money -= 20;
               res.send(`亲爱的客人,你的当前余额是${sessionObj.money}元`);
           }
       }else{
           banKa(res);
       }
   }else{
       banKa(res);
   }
});
function banKa(res){
    //1.生成一个卡号 1.要求不容易被猜到 2.永远不会重复
    var cardNo = Date.now()+"."+Math.random();
    //在服务端记录此卡号对应的余额
    sessions[cardNo] = {
        //记录此卡的过期时间戳
        expires:Date.now()+10*1000,
        money:100 //余额还剩100
    };
    //通过cookie把卡号发给客户端
    res.cookie(SESSION_KEY,cardNo);
    res.send(`亲爱的客人,送你一张理发卡,余额是100元`);
}
app.listen(9090);