#!/usr/bin/node
const fs=require('fs'),
      log=console.log;
if(process.argv.length!==3){
  console.error('命令行参数格式 ：cmd filename');
  process.exit(1);
}
try{
  var buf =fs.readFileSync('./nodejs-logo.bmp');
}catch(e){
  console.error(e.message);
  process.exit(2);
}
log('width:',buf.readInt32LE(0x12));
log('height:',buf.readInt32LE(0x16));
log('depth:',buf.readUInt16LE(0x1c));
