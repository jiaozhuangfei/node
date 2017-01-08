let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let read = require('./read');
let write = require('./write');//日志记录器
let debug = require('debug')('201611crawl:main');

module.exports = function(){
    //瀑布模型，上一个输出是下一个输入
    async.waterfall([
        function (cb) {
            read(url,cb);
        },
        function (items,cb) {
            write(items,cb)
        }
    ], function (err,result) {
        debug('全部数据处理完毕,请指示');
        //process.exit(0);//退出node进程
    });
}