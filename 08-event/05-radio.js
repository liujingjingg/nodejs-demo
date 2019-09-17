#!/usr/bin/node
console.log('hello world!');



const Radio=require('./03-listen-radio.js');
const station={
  freq:'106.7',
  name:'music radio'
};

var radio=new Radio(station);

radio.on('play',(station)=>{
  console.log('"%s" FM %s opened!',station.name,station.freq);
  console.log('lalallla...');
});

radio.on('stop',(station)=>{
  console.log('"%s" FM %s closed',station.name,station.freq);
});
