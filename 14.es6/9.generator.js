function* books(books) {
    /*  for(var i=0;i<books.length;i++){
     console.log(i);
     yield books[i];
     }*/
    console.log(0);
    yield books[0];// yield产出
    console.log(1);
    yield books[1];
    console.log(2);
}
//通过生成器生成迭代器
var iter = books(['js', 'node']);
var result = iter.next();
console.log(result);
var result = iter.next();
console.log(result);
var result = iter.next();
console.log(result);
