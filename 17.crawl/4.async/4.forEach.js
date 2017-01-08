let async = require('async');
let files = [
    {filename:'1.txt',content:'1'},
    {filename:'2.txt',content:'2'},
    {filename:'3.txt',content:'3'}
]
//循环数组中的每个元素，依次调用函数，item是files里的每一个元素
//cb 是回调函数
let fs = require('fs');
async.forEach(files,function(item,cb){
  fs.writeFile(item.filename,item.content,cb);
},function(){
    console.log('全部文件保存完毕!');
});
