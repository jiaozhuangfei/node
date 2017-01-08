let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
//读取接口返回的数据并且把数据传给callback
module.exports = function(url,callback){
    //编码为null 那么 body会保留原始的buffer类型
   request({url,encoding:null},function(err,response,body){
        //如果请求没有出错,并且状态码等于200的话
        if(!err && response.statusCode == 200){
            //把gbk编码的Buffer转成utf8格式的字符串
            body = iconv.decode(body,'gbk');
            //用cheerio把响应体字符串转成jquery对象
            let $ = cheerio.load(body);
            let items = [];
            //解析$中的电影列表，得到它们的名字和超链接,转成对象放在items里
            //得到元素列表
            $('.keyword .list-title').each(function(){
                let $this = $(this);
                items.push({
                    name:$this.text(),
                    url:$this.attr('href')
                });
            });

            callback(null,items);//[{name:'你的名字',url:'https://www.baidu.com/baidu'}]
        }else{
            callback('请求数据失败');
        }
   })
}

module.exports(url,function(err,items){
    console.log(items);
});
