#!/usr/bin/node
const http =require('http');
http.createServer((req,res)=>{
 console.log('\n\n${req.method} ${req.url}');
res.setHeader('Set-cookie',['name=wangding;ma-age=1000;HttpOnly','age=41']);
res.end('hello world!');
}).listen(8080);
