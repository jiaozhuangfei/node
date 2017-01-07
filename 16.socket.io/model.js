let mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1/201611chat');
//定义schema
let MessageSchema = new mongoose.Schema({
   content:{type:String,required:true},
   createAt:Date
});
//定义模型并导出
module.exports.Message = mongoose.model('Message',MessageSchema);