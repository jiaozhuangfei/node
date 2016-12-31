var model = {
    data:[{id:1,age:1},{id:2,age:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}],
    skip(num){
        model.func('skip', num);
        return model;
    },
    limit(num){
        model.func('limit', num);
        return model;
    },
    sort(obj){
        model.func('sort', obj);
        return model;
    },
    exec(fn){
        model.func('exec', fn);
    },
    func(key, data){
        switch (key){
            case 'skip':
                model.dataObj[key] = data;
                break;
            case 'limit':
                model.dataObj[key] = data;
                break;
            case 'sort':
                data ? model.dataObj[key] = data : {id: 1};
                break;
            default :
                run(data);
        }
        function run(fn) {
            let sort = model.dataObj.sort;//{id:-1}
            var attr = Object.keys(sort)[0];//["id"]
            model.data.sort(function (a,b) {
                //return model.dataObj.sort.id * -1
                return (a[attr]-b[attr])*sort[attr];
            });
            let skip = Number(model.dataObj.skip),
                limit = Number(model.dataObj.limit);
            let a = skip >= 0 && limit >= 0 && ((typeof model.dataObj['sort']) == 'object'),
                result = null,
                err = new Error('Error');
            if(a){
                // skip 3  limit 3           slice(3,6); 3 4 5
                result = model.data.slice(skip, skip + limit);
                err = false;
            }
            fn(err, result);
        }
    },
    dataObj: {skip: 0, limit: 0, sort: {id: 1}}
};

let pageSize = 3;//每页多少条
let pageNum = 2;//当前页码
// 1 2 3 4 5 6 7 8 9 10
// 7 6 5
//sort表示排序 key是排序的字段，值是升序还是降序 1升序 -1降序
model.skip(pageSize*(pageNum - 1)).sort({id:-1}).limit
//只有当调用exec的时候才真正执行查询
(pageSize).exec(function(err,docs){
    console.log(docs);
});
