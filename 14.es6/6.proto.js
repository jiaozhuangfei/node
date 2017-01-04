let obj1 = {name:'zfpx1',eat(){return '面包'}};
let obj2 = {name:'zfpx2'};
let obj = {};
Object.setPrototypeOf(obj,obj1);
// obj.__proto__ = obj1
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
console.log(Object.isPrototypeOf(obj,obj1));
Object.setPrototypeOf(obj,obj2);
console.log(Object.getPrototypeOf(obj));
console.log(obj.name);

let obj3 = {
    __proto__:obj1,
    eat(){
        return super.eat()+'啤酒';
    }
}
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));
console.log(obj3.eat());