#!/usr/bin/node
const fs=require('fs'),
      file=process.argv[2],
      path=require('path'),
      log=console.log,
      http=require('http');

if(process.argv.length!==3){
  console.error('命令行参数格式：cmd filename');
  process.exit(1);
}

try{
  var data=fs.readFileSync('file').toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}

var ext=path.extname(file);
var uriData='data:image/'+ext.slice(1,ext.length)+';base64,'+data;


var html='<!DOCTYPE html><html><body>
<img alt="'+path.basename(file,ext)+'" src="'+uriData+'">
</body></html>';


http.createServer((req,res)=>{
  log(req.headers);
  log(req.url+'\n');
  res.end(html);
  }).listen(8080))


