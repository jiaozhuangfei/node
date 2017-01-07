let Socket = require('ws');
//当创建websocket实例的时候就立刻发起连接
let socket = new Socket('websocket://localhost:8080');
//当服务器端和客户端连接成功之后会触发open事件
socket.on('open',function(){
  console.log('连接成功');
  //客户端通过send向服务器发消息
  socket.send('服务器你好');
});
//监听服务器发过来的消息
socket.on('message',function(msg){
  console.log(msg);
});