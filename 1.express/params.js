//最终返回的对象
var params = {};
//写的路径规则
var regStr = '/user/:id/:name';
//客户端请求的路径
var url = '/user/2/zfpx';
//属性名
var names = [];
regStr = regStr.replace(/:(\w+)/g,function(){
    //缓存参数名 id name
    names.push(arguments[1]);
    return '(\\w+)';
});
console.log(regStr);
var reg = new RegExp(regStr);
//提取出的分组就是对应的值
var result = url.match(reg);
console.log(result);
console.log(result.length);
for(var i=0;i<names.length;i++){
    params[names[i]] = result[i+1];
}
console.log(params);
