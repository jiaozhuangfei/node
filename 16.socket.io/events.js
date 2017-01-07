let EventEmiiter = require('events');
let obj = new EventEmiiter();
//订阅事件
obj.on('click',function(name,age){
  console.log('click',name,age);
});
//发射事件
obj.emit('click','zfpx',8);