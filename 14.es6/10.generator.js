/**
 * Generator是用来解决异步嵌套问题的
 */
var fs = require('fs');
/*
fs.readFile('1.txt','utf8',function(err,data){
    fs.readFile(data,'utf8',function(err,data){
        fs.readFile(data,'utf8',function(err,data){
            console.log(data);
        })
    })
})*/
/*var file1 = readFile('1.txt');
var file2 = readFile(file1);
var file3 = readFile(file2);
console.log(file3);*/
/*

function* gen(){
    var a = yield 1;
    console.log(a);
    var b = yield 2;
    console.log(b);
}
var it = gen();
var result = it.next();
console.log(result);
var result = it.next('aaaa');
console.log(result);
var result = it.next('bbbb');
console.log(result);*/


function readFile(filename){
   return function(next){
       fs.readFile(filename,'utf8',function(err,content){
            next(content);
       })
   }
}
function* readFiles(){
    var content1 = yield readFile('1.txt');
    var content2 = yield readFile(content1);
    var content3 = yield readFile(content2);
    console.log(content3);
}
co(readFiles)();
var co = require('co');
// npm install co
function co(fn){
 return function(){
     var iterator = fn();
     var curr;
     function next(val){
          curr = iterator.next(val);
          if(!curr.done){
              curr.value(next);
          }
     }
     next();
 }
}
