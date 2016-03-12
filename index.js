var http = require('http');
var fs = require('fs');
var url = require('url');

// Read in file
var myFile;
fs.readFile(__dirname + '/public/cli.tar.gz', function (err, content) {
  // If there was an error, throw to stop code execution
  if (err) {
    throw err;
  }
  file = content;
});

var server = http.createServer(function (request, response) {
  // Create a response header telling the browser to expect html
  response.writeHead(200, {"Content-Type": "application/tar+gzip", "Content-disposition" : "attachment; filename=t2-cli.tar.gz"});

  // Serve the content
  response.end(file);
});

server.listen(8080);
console.log('Server running at http://192.168.1.101:8080/');
