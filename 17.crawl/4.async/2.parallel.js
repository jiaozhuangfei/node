//并行，多个任务同时执行
let async = require('async');
console.time('cost');
// A -> 菜 4
// B -> 米 1
function parallel(tasks,callback){
   let result = [];
   let count = 0;
   function cb(index,err,data){
        count++;
        if(err){
            result[index] = data;
            callback(err,result);
        }else{
            result[index] = data;
            if(count == tasks.length){
                callback(err,result);
            }
        }
   }
   for(let i=0;i<tasks.length;i++){
       tasks[i](cb.bind(null,i));
   }
}
parallel([
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