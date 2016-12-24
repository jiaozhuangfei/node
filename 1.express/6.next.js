var app = function(req,res){
  var index = 0;//定义初始变量0
  function next(){
    var ware = app.wares[index++];
    if(ware)
        ware(req,res,next);
  }
  next();
}
//中间件的数组
app.wares = [];
//向数组添加中间件
app.use = function(fn){
    app.wares.push(fn);
}
app.use(function(req,res,next){
    console.log(1);
    //next();
});
app.use(function(req,res,next){
    console.log(2);
    next();
});
app.use(function(req,res,next){
    console.log(3);
    //res.end('end');
});
app(null,null);

