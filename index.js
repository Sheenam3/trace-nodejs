var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {
    
    if (req.url === "/message") {
        fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Sorry! Page does not exist');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
       
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Welcome to the Message Page</h1><br /><br />To read the message use localhost:3000/message');
        resp.end();
    }
});

server.listen(3000);
 
console.log('Server is listening on port: 3000');
