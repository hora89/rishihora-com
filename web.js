var express = require('express');

var app = express.createServer(express.logger());
var fs = require ('fs');
//fs.readFileSync('index.html');
//console.log(fs);

buf=fs.readFileSync('index.html');
//var len = buf.write
var string = buf.toString();
//console.log(string);


app.get('/', function(request, response) {
  response.send( string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
