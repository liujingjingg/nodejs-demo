#!/usr/bin/node
console.log('hello world!');

module.exports={
  'arae':function(radius){
    return Math.PI*radius*radius;
  },
  'circ':function(radius){
    return 2*Math.PI*radius;
  },
  'dia':function(radius){
    return 2*radius;
  }
};

console.dir(module);

