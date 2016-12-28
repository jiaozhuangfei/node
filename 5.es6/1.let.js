/*
 let a = 20;
 if(true){
 let a = 10;
 }

 console.log(a);*/

/*for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}*/
/*~function(){
   var name = 'zfpx';
   var name = 'zfpx2';

}()*/
const obj = {name:'zfpx'};
{
    const name = 'zfpx';
}
//obj = 'zfpx3';
//const 一旦赋值之后就不能再修改了,也不能重新赋值
//不能改的意思是此变量的引用地址不能改了，但它的值对应的属性还是可以修改的
obj.name = 'zfpx2';


