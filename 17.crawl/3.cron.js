let CronJob = require('cron').CronJob;
/*
  * 代表所有的可能的值
  * 1 表示某个值
  * 逗号隔开表示枚举值
  * - 表示区间，从开始到结束区间，每秒一次 1-20
  * 每隔5秒一次 秒数%5==0 就执行
  *
  * 周一到周五，每天晚上10点关机
**/
/*let job = new CronJob('*!/5 * * * * * ',function(){
  console.log(new Date().toLocaleString());
});*/
let job = new CronJob('0 0 22 * * 1-5',function(){
    console.log('关机');
    console.log(new Date().toLocaleString());
});
job.start();
/**
   Seconds: 0-59
   Minutes: 0-59
   Hours: 0-23
   Day of Month: 1-31
   Months: 0-11
   Day of Week: 0-6
 **/