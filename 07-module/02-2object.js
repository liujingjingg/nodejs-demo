#!/usr/bin/node
console.log('hello world!');


  function area (radius){
    return Math.PI*radius*radius;
  }
  function circ (radius){
    return 2*Math.PI*radius;
  }
  function dia (radius){
    return 2*radius;
  }


module.exports.area=area;

