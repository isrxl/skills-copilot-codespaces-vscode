// Create web server
// Run: node comments.js
// Open browser and browse to http://localhost:3000

var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    // console.log("A user made a request" + request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
}

http.createServer(onRequest).listen(3000);
console.log("Server is now running...");
