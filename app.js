var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    if (req.url === "/") {
        fs.readFile("register.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'html' });
                res.write(pgResp);
            }
             
           res.end();
        });
        
    }
});

server.listen(2000);
 
console.log('Server Started listening on 2000');