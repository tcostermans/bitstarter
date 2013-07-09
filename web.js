var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var content;
// First I want to read the file
fs.readFileSync('./index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    console.log(content); 
});
});


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
