/**
 * webpack配置文件，名称固定
 */
module.exports = {
    //指定打包的入口文件
    entry:'./app/index.js',
    //输入文件和目录
    output:{
        path:'./build',
        filename:'bundle.js'
    }
}