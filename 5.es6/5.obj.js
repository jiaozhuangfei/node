var name = 'zfpx';
var age = 8;
let obj = {
    name,
    getName(){
        return this.name;
    },
    set age(age){
      this._age = age*2;
    },
    get age(){
       return this._age+'岁';
    }
};

console.log(obj.getName());
obj.age  = '100';
console.log(obj.age);
