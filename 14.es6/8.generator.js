/**
 什么叫生成器 生迭代器的
 生成器运行之后会返回一个迭代器,迭代用来迭代元素的
 迭代器有一个 next方法，每运行一次就会返回一个结果
 {value:'本次返回的值',done:布尔值}
 **/
function generator(numbers){
   let index = 0;
   return {
       next(){
            return {
                done:index >= numbers.length,//表示是否迭代完成
                value:numbers[index++]//是当前的值
            }
       }
   }
}
var iterator = generator(['1','2']);
var result = iterator.next();
console.log(result);
var result = iterator.next();
console.log(result);
var result = iterator.next();
console.log(result);
