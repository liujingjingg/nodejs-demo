#!/usr/bin/node
console.log('file name:',__filename);
console.log('dir name:',__dirname);


var fileName=__dirname + '/views/view.html';
console.log('fileName:',fileName);


switch(process.platform){
  case 'linux':
    fileName=__dirname+'/views/view.html';
    break;

  case'win32':
    fileName=__dirname+'\\views\\view.html';
    break;

  default:
    fileName='someting wrong';
}

console.log('fileName',fileName);

const path =require('path');
fileName=path.join(__dirname,'views','view.html');
console.log('fileName:',fileName);
