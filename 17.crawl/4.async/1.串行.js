/**
 * 串行
 **/
// 买菜 做饭 吃饭
let async = require('async');
console.time('cost');
async.series([
    //cb 回调函数
    function (cb) {
       setTimeout(function(){
           console.log('买菜');
           cb(null,"菜菜");
       },1000)
    },
    function (cb) {
        setTimeout(function(){
            console.log('做饭');
            cb(null,"饭饭");
        },2000)
    },
    function (cb) {
        setTimeout(function(){
            console.log('吃饭');
            cb(null,"吃");
        },4000)
    }
], function (err,result) {
    console.log(err);
    console.log(result)
    console.timeEnd('cost');
});