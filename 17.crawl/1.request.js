let request = require('request');
let iconv = require('iconv-lite');
let fs = require('fs');
request({uri:'http://top.baidu.com/category?c=1&fr=topindex',encoding:null},
    //error first
    function (err, response, body) {
        // console.log(response);
        if (!err && response.statusCode == 200) {
            body = iconv.decode(body,'gbk');
            fs.writeFile('./baidu.html',body);
            console.log(body);
        }

    })
