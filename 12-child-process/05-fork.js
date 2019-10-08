#!/usr/bin/node
const cp=require('child_process');

console.log('I am father whit id:',process.pid);
var child=cp.fork('./02-child.js');

global.setTimeout(function(){
 // child.sent();
  console.log('5 seconds passed.fater game over');
},5000)
//child.stdout.pipe(process.stdout);

