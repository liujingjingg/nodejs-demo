#!/usr/bin/node


const http=require('http');

http.createServer((req,res)=>{
  console.log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log('');
  req.pipe(process.stdout);
  req.end("sdadad");
}).listen(8080,'localhost');


