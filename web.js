var express = require('express');

var app = express.createServer(express.logger());
var fs = require ('fs');
//fs.readFileSync('index.html');
//console.log(fs);

buf = new Buffer(256);
buf=fs.readFileSync('index.html');
//var len = buf.write
var string = buf.toString('utf8', 0);
//console.log(string);


app.get('/', function(request, response) {
  response.send('Hello World Bitches!'+ string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
