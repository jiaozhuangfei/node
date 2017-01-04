/*let double = num=>num*2;
console.log(double(5));

let sum = (a,b) => a+b;
console.log(sum(5,5));

let form = (name,age) => {
    return {name,age};
};
console.log(form('zfpx','8'));*/
/*
var person = {
    name:'zfpx',
    getName(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.name);
        },1000)
    }
}*/
console.log(this === exports);
let print = ()=> {
    console.log(this);
}
let obj = {name:'zfpx'};
obj.print = print;
obj.print();

function print2(){
  console.log(Array.from(arguments));
}
print2(1,2);

var a1 = Array(3)
var a2 = Array.of('',2);
console.log(a1[0]);
console.log(a2);

//1是被覆盖的起始位置
// 2 是取值的开始位置 3 是取值的结束 位置 包前不包后
var arr = [1,2,3,4,5];
arr.copyWithin(3,0,1);
console.log(arr);


console.log(Object.is(null,null));

