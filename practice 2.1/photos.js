const fs = require("fs");
const http = require("http");
const url = require('url');
var server = http.createServer(function(req, res) {
    var parts = url.parse(req.url).pathname;
    console.log(parts);
    var x = parts.split('').reverse().join('');
    var y = x[0]; 
    let content = fs.readFileSync("C:\\Users\\DNS\\programming-lessons\\programming-lessons-1\\practice 2.1\\"+y+".jpg");
        res.writeHead(200, {
           'Content-Type': 'image/jpeg'
        })
       res.end(content)
});
  
  server.listen(3000);
    