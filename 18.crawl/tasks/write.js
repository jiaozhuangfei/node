let Movie = require('../model').Movie;
///此函数负责把items保存到数据库，并且调用回调函数
let debug = require('debug')('201611crawl:write');
let async = require('async');
module.exports = function(items,callback){
  //Movie.create(items,callback);
  Movie.remove({},function(){
      async.forEach(items,function(item,cb){
          Movie.create(item,function(err,result){
              debug('保存电影:'+item.name);
              cb();
          })
      },function(){
          debug('电影保存完毕');
          callback();
      });
  })

}

/*
module.exports([{ name: '神探夏洛克',
    url: 'http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%C9%F1%CC%BD%CF%C4%C2%E5%BF%CB' },
],function(err,docs){
    console.log(docs);
});*/
