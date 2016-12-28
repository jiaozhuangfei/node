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
//p1.getName();
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
//s1.getName();
//s1.getAge();
//====================es6===========================
function Person5(name) {
    this.name = name;
}
Person5.prototype.getName = function (){
    console.log(this.name);
};
var p5 = new Person5();
//p5.getName();

function Student5(name,age){
    //调用父类的构造函数 this指向当前子类的实例
    Person5.apply(this,arguments);
    this.age = age;
}
//基于原型创建一个实例出来
function create(prototype){
   function Fn(){}
   Fn.prototype = prototype;
   return new Fn();
}
Student5.prototype = create(Person5.prototype);
Student5.prototype.constructor = Student5;
Student5.prototype.getAge = function (){
    console.log(this.age);
};
var s5 = new Student5('zfpx',8);
s5.getName();
s5.getAge();

