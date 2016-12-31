var mongoose = require('mongoose');
// 协议名://IP:端口号(可省略)/数据库名称
mongoose.connect('mongodb://127.0.0.1/201611node');
//定义集合的骨架模型  定义一个集合中文档的字段的名称和类型以及默认值等
//只定义字段和类型，不能操作数据库
var UserSchema = new mongoose.Schema({
  username:String,//用户名，是字符串类型
  password:String,// 密码是字符串类型
  age:Number //数字类型
})
//创建用户模型，可以操作数据库
// 1 参数是模型的名称
// 2 参数是模型的schema定义
var UserModel = mongoose.model('User',UserSchema);
/**
 * UserModel有很多方法
 * 创建文档 create 把参数文档保存到数据库中 异步
 */
UserModel.create({
    username:'zfpx',
    password:'123456',
    age:6
},function(err,doc){//doc保存之后文档对象
  if(err){
      console.error(err);
  }else{
      console.log(doc);
  }
});






