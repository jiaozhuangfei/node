/**
 类
 **/
class Person{
    //此方法是类中的初始化方法，方法名是固定的，不能修改
    //如果创建类的时候有参数， 会直接传给constructor
   constructor(name){
     //为此类的实例添加私有属性
     this.name = name;
   }
   //在构造函数外部声明的方法都是所有实例的公有方法
   getName(){
       console.log(this.name);
   }
}
var p1 = new Person('zfpx');
p1.getName();
//类的继承
class Student extends Person{
  constructor(name,age){
      super(name);//super指的是父类的构造函数
      this.age = age;//增加子类自己特有的私有属性
  }
  getAge(){
      console.log(this.age);
  }
}
let s1 = new Student('zfpx',8);
s1.getName();
s1.getAge();
//====================es6===========================
function Person5(name){
    this.name = name;
}
Person5.prototype = {
    constructor:Person5,
    getName:function(){
        console.log(this.name);
    }
}
Person5.prototype.getName = function(){
    console.log(this.name);
}
var p5 = new Person5('zfpx');
p5.getName();


function Student5(){

}

let s5 = new Student('zfpx',8);
s5.getName();
s5.getAge();