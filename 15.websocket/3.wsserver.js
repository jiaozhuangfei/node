let WebServer = require('ws').Server;
//创建一个websocket服务器的实例
let server = new WebServer({port:8080});
// require('events');
//监听客户端的请求,当请求到来的时候执行回调函数
//参数是连接对象
server.on('connection',function(socket){
    //监听客户端的消息
    socket.on('message',function(msg){
        console.log(msg);
        socket.send("服务器:"+msg);
    });
});

