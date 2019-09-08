#!/usr/bin/node
console.log('start...');

var count=0;

var timeid=setInterval(loop,500);
function loop(){
  count++;
  console.log('i will loop forever');

  if(6===count){
    clearInterval(timeid);
  }
}
