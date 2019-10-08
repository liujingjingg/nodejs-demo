#!/usr/bin/node
//execfile 等16s完全过完统一打印信息
const cp =require('child_process');
console.log('I am father process.pid:',process.pid);
cp.execFile('./02-child.js',(err,out)=>{
 console.log(out);
};
