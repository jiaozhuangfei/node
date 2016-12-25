var querystring = require('querystring');
//用于把字符串转成对象
console.log(querystring.parse('name=zfpx&age=8'));
console.log(querystring.parse('name@zfpx;age@8',';','@'));