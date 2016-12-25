var str =  'home=beijing; username=zfpx; age=8';
var key = 'username';
var regStr = '(; |^)'+key+'='+'(\\w+)(; |$)'
var result = str.match(new RegExp('(; |^)'+key+'='+'(\\w+)(; |$)'));
console.log(result[2]);