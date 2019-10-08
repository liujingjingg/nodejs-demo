#!/usr/bin/node
const cp=require('child_process');
console.log('i am father  with id:',process.pid);
var child=cp.spawn('./02-child.js',[],{'detached':true,'stdio':['ignore',1,2]});
global.setTimeout(function(){
  console.log('father bye');
  process.exit(0);
},5000);
//spawn支持流的，一边打印一边执行
