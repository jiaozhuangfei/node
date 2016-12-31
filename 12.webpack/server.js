var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.resolve('./build')));
app.listen(8080);