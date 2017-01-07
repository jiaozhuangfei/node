let express = require('express');
let app = express();
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
  next();
});
app.get('/clock',function(req,res){
  res.send(new Date().toLocaleString());
});
app.listen(8080);