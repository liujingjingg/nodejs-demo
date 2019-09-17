#!/usr/bin/node
console.log('hello world!');


const Dog=require('./02-dog.js');
var taidi=new Dog('taidi',4);
var zangao=new Dog('zangao',9);

function onbark(){
  console.log('%s barked! energy:%s',this.getName(),this.getEnergy());
};

taidi.on('bark',onbark);
zangao.on('bark',onbark);
