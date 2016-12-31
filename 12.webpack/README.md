## 编写步骤
1. 创建源码目录 app,在里面创建一个入口文件index.js.然后通过此模块引入其它的模块。
2. 创建webpack配置文件，
```
  //指定打包的入口文件
    entry:'./app/index.js',
    //输入文件和目录
    output:{
        path:'./build',
        filename:'bundle.js'
    }
```
3. 执行webpack命令的时候会在当前目录下面找webpack.config.js文件，然后进行打包
3. 本地安装执行webpack
编写一个脚本
```
"scripts": {
    "build":"webpack"
  }
```
在执行`npm run build`的时候会在当前目录的node_modules下面.bin目录下找webpack.cmd文件执行，也会在当前目录下面找webpack.config.js文件，然后打包输出 
