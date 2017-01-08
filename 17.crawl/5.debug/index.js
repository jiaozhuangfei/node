/**
 * bug 就是 bug
 * 调试语句
 * debug就是用打印调试语句 = console.log
 * 是一个工厂函数
 */
let debug = require('debug');
//运行此函数会返回一个新的函数,这个新的函数叫一个日志记录器，
//这个参数就会成为日志记录器的名字
let info = debug('logger:info');
//执行此函数的时候会去比较自己的名字和环境变量中的值
//只有当环境变量中DEBUG的值和自己的名字一样的时候才会输出日志
// set DEBUG=logger:a   设置环境变量的值
info('我是loggerA');

let warn = debug('logger:warn');
warn('我是loggerB');

let error = debug('logger:error');
error('我是loggerC');
/**
 * 使用此模块可以拥有在不修改代码的情况，只需要通过修改环境变量的值
 * 就可以输出不同的日志
 */

