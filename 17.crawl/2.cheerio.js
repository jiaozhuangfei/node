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
let items= [];
$('.hd .title a').each(function(){
   let $me = $(this);
   let result = $me.attr('href').match(/b=(\d+)/);
   let item = {
       id:result[1],
       name:$me.text(),
       url:`http://top.baidu.com${$me.attr('href').slice(1)}`,
   }
   items.push(item);
});
console.log(items);


