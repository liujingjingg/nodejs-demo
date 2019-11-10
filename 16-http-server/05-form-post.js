#!/usr/bin/node
const http =require('http'),
      qs=require('querystring'),
      log=console.log;
http.createServer((req,res)=>{
  log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  req.pipe(process.stdout);
  

  if(req.url==='/'){
    //200 ok
    res.writeHead(200,{'content-type':"text/html",'content-length':Buffer.byteLength(html,'utf8')});
    res.end(html);
  }else{
    //404 not found
    res.statusCode=404;
    res.setHeader('content-type','text/plain')
    res.end('error');
  }
  res.end('ok!');
}).listen(8080);
