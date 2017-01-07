/**
 * express可以用来去提供html css js 这些文件服务器
 * websocket可以用来实现数据通信
 * 它们可以共用一个端口号 8080
 * 1. socket.io是一个websocket的库
 * 2. express提供http服务器
 * 3. socket在握手的时候要使用http服务器
 **/
let express  = require('express');
let app = express();
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.sendFile('./index.html',{root:__dirname});
});
app.get('/html',function(req,res){
    res.sendFile('./index.html',{root:__dirname});
});
app.get('/html/doc',function(req,res){
    res.sendFile('./index.html',{root:__dirname});
});
//创建一个http服务器并把app作为监听函数
let server = require('http').createServer(app);
//socket.io是依赖http服务的实现握手
let io = require('socket.io')(server);
//服务器端监听客户端的请求
io.on('connection',function(socket){//socket 代表与此客户端的连接对象
    //监听客户端发过来的消息
    socket.on('message',function(message){
        console.log(message);
        socket.send('服务器说:'+message);
        //为什么要封装 1. 省事 2. 避免写错消息类型
        //socket.emit('message','服务器说:'+message);
    });
});

server.listen(8080);



/*Socket.prototype.send = function () {
 var args = toArray(arguments);//把类数组转成数组
 args.unshift('message');//向数组的左端，也就是开始位置插入元素 message
 this.emit.apply(this, args);//发射事件 emit
 socket.emit('message','服务器说:'+message);
 return this;
 };*/



