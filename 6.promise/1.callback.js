var fs = require('fs');
//由于单线程导致的恶魔金字塔
/*fs.readFile('1.txt','utf8',function(err,data){//data = 2.txt
    fs.readFile(data,'utf8',function(err,data){ //data= 3.txt
        fs.readFile(data,'utf8',function(err,data){ //3
                console.log(data);
        })
    })
})*/

function readFile(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
/**
 * 链式调用
 */
/*readFile('1.txt')
.then(function(data){// 2.txt
    //then方法返回一个新的promise
   return readFile(data);
})
.then(function(data){//3.txt
   return readFile(data);
})
.then(function(data){//3
   console.log(data);
   //在此操作流程中如果有任何一步失败了，就会走到catch里
}).catch(function(err){
    console.error(err);
});*/

/**
 * Promise还有很多静态方法
 * 1.读取a.txt b.txt读到 5 和6
 * 进行相加得到11并返回
 */
/*var _a;
readFile('a.txt')
    .then(function(a){
        _a = a;
        return readFile('b.txt')
    })
    .then(function(b){
        console.log(_a+b);
    })*/

var pb = readFile('b.txt');
var pa = readFile('a.txt');
/*Promise.all([pa,pb]).then(function(result){
    console.log(result);
})*/

//短跑比赛 竞赛
Promise.race([pb,pa]).then(function(result){
    console.log(result);
})

