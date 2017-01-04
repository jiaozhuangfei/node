let name = 'zfpx';
let age = 8;
//let desc = name+' is '+age +'岁了';
/*let desc = "${name} is ${age} 岁了";
function tmpl(tmplStr){
  return tmplStr.replace(/\$\{(\w+)\}/g,function(){
      return eval(arguments[1]);
  });
}
console.log(tmpl(desc));
 */
//其余参数
function change(strings,...values){
    //let other = Array.prototype.slice.call(arguments,1);
    console.log(strings,values);
    let str = '';
    for(let i=0;i<values.length;i++){
        str += (strings[i]+values[i]);
    }
    str += strings[strings.length -1];
    return str.toUpperCase();
}
let desc = change`${name}  is ${age} 岁了`;
console.log(desc);