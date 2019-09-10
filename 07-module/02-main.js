#!/usr/bin/node


/*const p=require('./02-export-var.js');
console.dir(module);
console.log(p);*/


/*const circle=require('./02-export-function.js');
console.log('r=10,circle area:%d',circle(10).area());
console.log('r=10,circle circ:%d',circle(10).circ());*/



/*const circle =require('./02-object.js'),
      log=console.log;

log('r=10,circle dia:',circle.dia(10));
log('r=10,circle circ:',circle.circ(10));
log('r=10,circle area:',circle.arae(10))
console.dir(module);*/


var circle =require('./02-2object.js');
console.log('r=10,circle area:',circle.area(10));
