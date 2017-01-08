let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/201611node');
//定义模型骨架
let MovieSchema = new mongoose.Schema({
    name:String,
    url:String
})
//定义模型并导出
exports.Movie = mongoose.model('Movie',MovieSchema);