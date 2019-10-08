#!/usr/bin/node
const http =require('http');
http.createServer((req,res)=>{
  console.log('reqest method:',req.method);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    default:
      err(res);
  }
  res.end('ok');
}).listen(8080);

function select(req,res){
  res.end(req.method);
}

function update(req,res){
  res.end(req.method);
}
function err(res){
  res.end('something is woring');
}
