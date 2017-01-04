var attr = Symbol('name');
var obj = {[attr]:'zfpx'};

function process(obj){
   var a = Symbol('name');
   console.log(obj[a]);
}

process(obj);
