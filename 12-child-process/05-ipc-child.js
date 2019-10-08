#!/usr/bin/node

console.log('I am child process.pid:',process.pid);
process.on('message',(msg)=>{
  console.log('msg from father:',msg);
});

process.sent('hello! I am child process.pid:'+process.pid);
