/*
let arr = [1,5,8,9];
let arr2 = [4,6];
function print(a,b,c,d){
    console.log(a,b,c,d);
}
//print.apply(null,arr);
print(...arr);
var big = Math.max(...arr);
console.log(big);

let arr3 = arr.concat(arr2);

let arr4 = [...arr,...arr2];
console.log(arr4);

*/

//let obj1 = {name:'zfpx'};
//let obj2 = {age:8};
//let obj3 = {...obj1,...obj2};
//1参数是目标对象 后面所有参数是源对象
/*
function assign(target,...sources){
  for(let i=0;i<sources.length;i++){
      for(var attr in sources[i]){
          target[attr] = sources[i][attr];
      }
  }
  return target;
}
let obj3 = assign({},obj1,obj2);
console.log(obj3)*/

let obj1 = {name:'zfpx',age:9,hobby:[]};
/*let obj2 = Object.assign({},obj1);
obj2.hobby.push('drinking');*/
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.hobby.push('drinking');
console.log(obj1.hobby);
