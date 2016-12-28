/**
 * 定义和使用箭头函数
 **/
let double = num => num * 2;

console.log(double(3));
//如果参数为零或多于一个，参数列表必须有小括号
let getName = () => 'zfpx';
console.log(getName());

let add = (a,b) => a+b;
console.log(add(1,2));

//右边如果只有一个返回值 可以直接写

let doubleAdd = (a,b) =>{
    console.log(a,b);
    return a+b;
}
let result  = doubleAdd(2,3)
console.log(result);

let getPerson = () => {
    return {name:'zfpx',age:8};
};

console.log(getPerson());


/**
 * 箭头函数没有自己的this指针
 * 1. 在外层暂存this指针
 * 2. bind
 * 3.
 */
var obj = {
    name:'zfpx',
    getName:function(){
        //let _this = this;
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}
obj.getName();

console.log(this);







