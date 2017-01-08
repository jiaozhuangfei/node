let cheerio = require('cheerio');
//http://top.baidu.com/buzz?b=26&c=1&fr=topcategory
let html = `
            <div class="hd">
                <h2 data="26" class="title">
                  <a href="./buzz?b=26&c=1">全部电影</a>
                </h2>
                <a class="more" href="./buzz?b=26&c=1">更多 &gt;</a>
            </div>
           <div class="hd">
                <h2 data="661" class="title title-blue"><a href="./buzz?b=661&c=1">热映电影</a></h2>
                <a class="more" href="./buzz?b=661&c=1">更多 &gt;</a>
            </div>
`;
//可以把html字符串转成一个 $ 对象
let $ = cheerio.load(html);
let items= [];//声明一个空数组
//寻找 类名为.hd 下面 类名为.title下面的  所有标签
$('.hd .title a').each(function(){
   let $me = $(this);//类似于把原生DOM转成jquery
   let result = $me.attr('href').match(/b=(\d+)/);//使用正则把href中的ID提取出来
   let item = {
       id:result[1],//获得ID
       name:$me.text(),//获得内容
       url:`http://top.baidu.com${$me.attr('href').slice(1)}`,//获得url地址
   }
   items.push(item);
});



