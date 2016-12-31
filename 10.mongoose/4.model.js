var model = {
    data:[{id:1,age:1},{id:2,age:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}],
    skip(num){
        this.skip = num;
        return this;
    },
    limit(num){
        this.limit = num;
        return this;
    },
    sort(obj){
        this.sort = obj;//自行把obj转成排序函数
        return this;
    },
    exec(callback){
        //把它变成异步的 异步代码一定会在同步代码执行后执行
        //setImmediate  setTimeout
      setImmediate(()=>{
          callback(null,this.data.sort(this.sort).slice(this.skip,this.skip+this.limit));
      });
    }
};

let pageSize = 3;//每页多少条
let pageNum = 2;//当前页码
// 1 2 3 4 5 6 7 8 9 10
// 7 6 5
//sort表示排序 key是排序的字段，值是升序还是降序 1升序 -1降序
model.exec(function(err,docs){
    console.log(docs);
}).skip(pageSize*(pageNum - 1)).sort({id:-1}).limit
//只有当调用exec的时候才真正执行查询
(pageSize);
