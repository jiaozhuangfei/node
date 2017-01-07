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
        //向所有的连接到服务器的客户端进行广播
        io.emit('messsage',message);
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

/**
 * 一、 实现匿名聊天
 * 1. 给按钮绑定点击事件
 * 2. 当点击按钮的时候，取得文本域中的内容，通过消息发送给服务器
 * 3. 服务器收到消息，广播给所有的客户端。
 * 4. 客户端收到服务器的广播后把此消息转成li添加到消息列表ul里。
 * 二、 实现具名聊天
 * 三、 实现私聊
 * 四、 分房间聊天
 * 五、 房间内的在线人数，消息的持久化
 */



