#!/usr/bin/node
const http =require('http'),
      log=console.log;
http.createServer((req,res)=>{
  log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  var f1='';
  req.on('data',(data)=>{
    f1+=data;
  });

  req.on('end',()=>{
    log(f1.split('\r\n')[1].split(';')[2].trim()).filename  ;

    log(new Buffer (f1.split('\r\n')[4]).toString('utf8'));
  })

  req.pipe(process.stdout);
  res.end('ok!');
 
}).listen(8080);
