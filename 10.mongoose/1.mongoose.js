var mongoose = require('mongoose');
// 协议名://IP:端口号(可省略)/数据库名称
mongoose.connect('mongodb://127.0.0.1/201611node');
//定义集合的骨架模型  定义一个集合中文档的字段的名称和类型以及默认值等
//只定义字段和类型，不能操作数据库
var UserSchema = new mongoose.Schema({
  username:String,//用户名，是字符串类型
  password:String,// 密码是字符串类型
  age:{type:Number,required:true} //数字类型
    //collection可以直接指定集合的名称
},{collection:'user'})
//创建用户模型，可以操作数据库
// 1 参数是模型的名称
// 2 参数是模型的schema定义

// 集合的名称= User=>小写 user=>转成复数 users
var UserModel = mongoose.model('User',UserSchema);
/**
 * UserModel有很多方法
 * 创建文档 create 把参数文档保存到数据库中 异步
 */
/*UserModel.create({
    username:'zfpx2',
    password:'2',
    age:'2',//如果类型不匹配，mongoose会尝试进行类型转换，如果转换失败，则抛出错误，如果转换成功则成功保存
    home:'北京'//如果此字段在schema中没有定义，则忽略之
},function(err,doc){//doc保存之后文档对象
  if(err){
      console.error(err);
  }else{
      console.log(doc);
  }
});*/
/**
 * find 查询集合中的文档
 * 参数1 是查询的条件
 */
/*
UserModel.find({age:200},function(err,users){
   if(err){
       console.error(err);
   }else{
        console.log(users);
   }
});
*/
/**
 * 移除
 * justOne 如果条件匹配的记录数是多条，那么仅仅删除第一条
 */
/*UserModel.remove({age:2},function(err,result){
   if(err){
       console.error(err);
   }else{
       //{ ok: 1, n: 1 }
       // ok=1 表示 删除成功
       // n 表示删除的记录数
       console.log(result.result);
   }
});*/
// update最多只匹配一数
//如果想匹配多条 想更新匹配到的多条
UserModel.update({age:2},{password:2},{multi:true},function(err,result){
    //{ ok: 1, nModified: 0, n: 1 }
    // n 是匹配的条数
    // nModified 需要真正修改的条数，如果原来的值和更新后的值一样，则不需要更新
 if(err)
     console.error(err);
 else
     console.log(result);
});




