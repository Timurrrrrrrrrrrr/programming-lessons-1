const http = require("http");
const requestHandler = (request, response) => {
response.setHeader("Content-Type", "text/html; charset=utf-8;");
response.write("<h2>hello world</h2>");
response.end();
};
http.createServer(requestHandler).listen(3000);
