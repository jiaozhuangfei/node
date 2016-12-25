var fs = require('fs');
function read(callback){
    fs.readFile('./user.json','utf8',function(err,users){
        try{
            users = JSON.parse(users);
        }catch(err){
            users = [];
        }
        callback(users);
    })
}
/*read(function(users){
    console.log(users);
});*/

function save(users,callback){
  fs.writeFile('./user.json',JSON.stringify(users),function(err){
      callback();
  })
}
save([{id:1,name:'zfpx1'}],function(){});