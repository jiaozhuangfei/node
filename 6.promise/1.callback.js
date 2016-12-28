var fs = require('fs');
//由于单线程导致的恶魔金字塔
fs.readFile('1.txt','utf8',function(err,data){//data = 2.txt
    fs.readFile(data,'utf8',function(err,data){ //data= 3.txt
        fs.readFile(data,'utf8',function(err,data){ //3
                console.log(data);
        })
    })
})

