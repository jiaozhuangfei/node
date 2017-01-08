//并行，多个任务同时执行
let async = require('async');
console.time('cost');
// A -> 菜 4
// B -> 米 1
/*function parallel(tasks,callback){
   let result = [];
   let count = 0;
   //index 任务的索引
   function cb(index,err,data){
        count++;//完成任务数量立即加1
        if(err){//如果有错误，立刻执行回调
            result[index] = data;
            callback(err,result);
        }else{
            result[index] = data;
            if(count == tasks.length){
                callback(err,result);
            }
        }
   }
   //循环所有的任务并依次全始全部执行
   for(let i=0;i<tasks.length;i++){
       //传的回调函数已经绑定了第一个参数为当前任务在总任务数组中的索引
       tasks[i](cb.bind(null,i));
   }
}*/
async.parallel([
    function (cb) {
        setTimeout(function () {
            console.log('买菜');
            //1错误对象 2 参数是本任务的结果，输出值
            cb(null,'菜');
        }, 4000)
    },
    function (cb) {
        setTimeout(function () {
            console.log('买米');
            cb(null,'米');
        }, 1000)
    }
], function (err, result) {
    console.log(err);
    console.log(result);// [,'米']
    console.timeEnd('cost');
});