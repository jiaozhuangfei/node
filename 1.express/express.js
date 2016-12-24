function createApplication(){
    //app是请求监听函数
  var app = function(req,res){
      //获取到请求的方法名
    var method = req.method;
    //获取到请求的路径 请求的路径在没有查询字符串的时候 req.url =pathname
    var pathname = require('url').parse(req.url,true).pathname;
    for(var i=0;i<app.routes.length;i++){
        var layer = app.routes[i];
        if(layer.method == method && layer.pathname == pathname){
            layer.listener(req,res);
            return;
        }
    }
    res.end('CANNOT '+method+' '+pathname);
  }
  //保存所有的路由规则
  app.routes = [];
  //定义一个get函数属性,当调用此方法的时候会保存此路由规则
  app.get = function(pathname,listener){
      app.routes.push({
          method:'GET',
          pathname:pathname,
          listener:listener
      });
  }
  return app;
}

module.exports = createApplication;