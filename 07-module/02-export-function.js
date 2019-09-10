#!/usr/bin/node


module.exports=(radius)=>{
  function area(){
    return Math.PI*radius*radius;
  }
  function circ(){
    return 2*Math.PI*radius;
  }
  return{
    area:area,
    circ:circ
  };
};

console.dir(module);
