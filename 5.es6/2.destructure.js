/*
let obj = {
    name:'zfpx',
    age:8,
    hobby:['smoking','drinking'],
    home:{
        province:'广东',
        city:'东莞'
    }
}
let{
    home:{province,city}}=obj
let {name,age,hobby} = obj;
console.log(province,city)
console.log(name,age,hobby);*/

function ajax({url=new Error('URL不能空'),
               type='GET',
               data={},
               dataType='json'}){
/*  if(!options.url) throw Error('URL不能为空');
  options.type = options.type?options.type:'GET';
  options.data = options.data?options.data:{};
  options.dataType = options.dataType?options.dataType:'json';*/
  console.log(url,type,data,dataType);
}
ajax({
    //url:'http://localhost:8080'
  /*  data:{},
    dataType:'json'//在回调函数里得到的数据类型*/
});