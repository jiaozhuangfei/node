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
let users = [];
for(let i=1;i<=10;i++){
    users.push({username:'zfpx'+i,age:i});
}
/*UserModel.create(users,function(err,docs){
    if(err)
        console.error(err);
    else
        console.log(docs);
});*/
//只要从数据库查询出来的对象，都有一个 save方法，可以把自己重新保存数据库
/*UserModel.find({},function(err,docs){
  for(let i=0;i<docs.length;i++){
      docs[i].username = 'zfpx'+docs[i].age;
      docs[i].save();
  }
});*/

/**
 * 1. 如何进行字段的过滤
 * 0 代表查询除此之外的字段 exclude
 * 1 代表查询包含此字段 include
 *BadValue Projection cannot have a mix of inclusion and exclusion
 * 1 username出来，其它不出来
 * 0 age不出来，其它都出来
 * home
 */
/*UserModel.find({},{username:1,age:0},function(err,docs){
    console.log(err);
    console.log(docs);
});*/
/*
UserModel.findById('58673211f1454b19f47b2796',function(err,doc){
    console.log(doc);
});*/

/**
 * 查询的时候
 * 跳过多少条
 * 最多取多少条
 * 按某个字段升序或降序排列
 */
//分页查询
let pageSize = 3;//每页多少条
let pageNum = 2;//当前页码
// 1 2 3 4 5 6 7 8 9 10
// 10 9 8 -> 7 6 5
//sort表示排序 key是排序的字段，值是升序还是降序 1升序 -1降序
UserModel.find().sort({age:-1}).skip(pageSize*(pageNum - 1)).limit
//只有当调用exec的时候才真正执行查询
(pageSize).exec(function(err,docs){
    console.log(docs);
});




