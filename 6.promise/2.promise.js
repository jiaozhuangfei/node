/**
 * Promise是ES6的原生对象，是一个类
 * 可以基于这个类创建一个实例
 */
var fs = require('fs');
let readFile = function(filename){
    //resolve 成功解决 调用它表示解决此事件，也就意味着成功了，1.会把状态改成成功态，2会调用成功的回调
    //reject 拒绝 调用它表示此事件失败了，1.会把状态改成失败态，2会调用失败的回调
    //此参数函数在创建promise实例的时候会立刻执行 ,异步任务就写在里面
  return  new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                reject(err);//如果失败了传入失败的原因
            }else{
                resolve(data);//如果成功了，把得到成果传进行
            }
        })
  });
}
//promise有一个方法叫then方法，与它交互的方法是传入成功和失败的回调
readFile('1.txt').then(function(data){
    console.log(data);
},function(err){
    console.log(err);
});