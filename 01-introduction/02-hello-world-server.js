#!/usr/bin/node
const http =require('http');
http.createServer((req,res)=>{
  res.writeHead(200,)
 res.end('hello world!');
}).listen(8080);
