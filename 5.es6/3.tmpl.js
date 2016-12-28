/**
 * 模板字符串
 * 用`引起来的字符串
 */
let name = 'zfpx';
let age = 8;
//let desc = `${name} is ${age} years old!`;
//console.log(desc);
console.log(eval("name"));
let desc = "${name} is ${age} years old!";
function  parser(str) {
    var reg = /\$\{(\w+)\}/g;
    var tmp = str.replace(reg, function () {
        return eval(arguments[1]);
    });
    return tmp;
}
console.log(parser(desc));
//zfpx is 8 years old!

let ul = `
         <ul>
          <li>1</li>
           <li>2</li>
         </ul>
        `;