#!/usr/bin/node
console.log('precess id',process.pid);
process.stdin.resume();
process.on('SIGINT',function(){
  console.log('your press ctrl-c,good bye');
  process.exit(0);
});

process.on('SIGTSTP',function(){
  console.log('your press ctrl-z,stop running');
});
