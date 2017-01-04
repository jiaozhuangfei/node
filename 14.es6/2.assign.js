let obj = {name:'zfpx',age:8,hobby:{name:'eat',price:10}};
let {hobby:{name,price}} = obj;
console.log(name,price);
/*let name = obj.name;
let age = obj.age;*/
/*
let age1 = obj.age;
let name1 = obj.name;
let {age:age1,name:name1} = obj;
console.log(name1,age1);*/


/*function ajax(options){
  if(!options.url) throw Error('url必须提交');
    options.method= options.method?options.method:'GET';

}*/
function ajax({url=new Error('url必须传入'),method='GET',data={},success}){
  console.log(url,method,data,success);
}
ajax({


    data:{},
    success(){}
});