/**
 * water fall
 * 瀑布
 * 上一个的输出，下一个任务马上要用
 */
let async = require('async');
async.waterfall([
    function (cb) {
        setTimeout(function () {
            console.log('水');
            cb(null, '水');
        }, 2000)
    },
    function (data,cb) {
        setTimeout(function () {
            console.log('咖啡');
            cb(null, data+'+咖啡');
        }, 2000)
    },
    function (data,cb) {
        setTimeout(function () {
            console.log('糖');
            cb(null, data+'+糖');
        }, 2000)
    }
], function (err,result) {
console.log(result);
});

