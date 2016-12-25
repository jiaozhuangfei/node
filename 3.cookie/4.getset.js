// set get 方法
var document = {
  cookies:[],
  set cookie(cookie){
      document.cookies = document.cookies.filter(function (item) {
          return item.split('=')[0] != cookie.split('=')[0]
      });
      document.cookies.push(cookie);
  },
  get cookie(){
    return document.cookies.join('; ');
  }
}
document.cookie = 'name=zfpx';
document.cookie = 'age=8';
document.cookie = 'name=zfpx2';
console.log(document.cookie);
// age=8; name=zfpx2