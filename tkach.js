const fs = require("fs");
const http = require("http");
const url = require('url');
const express = require('express');
const app=express();
var server = http.createServer(function(req, res) {
    
});
  
  server.listen(3000);
app.use((req,res,next)=>{
    console.log(req);
    next();

});

  