const fs = require("fs");
const http = require("http");


const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>hello world</h2>");
        fs.appendFileSync("hello.txt", 'переход в hello\n');
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");

    } else if (request.url == "/image/1") {
        response.end( < img src = 'https://www.example.com/images/dinosaur.jpg' > )
    }
    response.end();

};

http.createServer(requestHandler).listen(3000);