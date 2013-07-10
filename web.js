var express = require('express');
var fs = require('fs');
var buf;
fs.readFile('index.html', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    buf = new Buffer(data.length);
    buf.write(data);
  });

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
