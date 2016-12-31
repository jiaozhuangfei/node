/**
 * webpack配置文件，名称固定
 */
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //指定打包的入口文件
    entry:{
        index:'./app/index.js',
        b:'./app/b.js',
    },
    //输入文件和目录
    output:{
        path:'./build',
        filename:'[name].js'
    },
    devServer:{
        inline:true,
        //指定静态文件根目录
      contentBase:'./build'
    },
    //模块加载设置
    module:{
        //加载器
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            },
            //css文件用style-loader css-loader处理
            {
                test:/\.css$/,
                loader:'style!css'
            },
            //图标图片等二进制文件用url-loader处理
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'url'
            }
        ]
    },
    //插件列表
    plugins:[
        new HtmlWebpackPlugin({
            template:'./app/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template:'./app/b.html',
            filename: 'b.html',
            chunks: ['b']
        }),
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080/a.html'
        })
    ]
}