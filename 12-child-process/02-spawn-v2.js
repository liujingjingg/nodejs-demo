#!/usr/bin/node
const cp=require('child_process');
console.log('i am father  with id:',process.pid);
var child=cp.spawn('./02-child.js');
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

//spawn支持流的，一边打印一边执行
