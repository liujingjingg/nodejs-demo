#!/usr/bin/node
const fs=require('fs'),
      argv2=process.argv[2],
      argv3=process.argv[3];
if(argv2=='list'){
  fs.readdir(__dirname,(err,files)=>{
    if(err){
      console.error(error.message);
    }else{
      files.forEach(function(file){
        fs.stat(file,(err,stats)=>{
               console.log('{"fileName":"%s","fileSize":"%s"}',file,stats.size);
        });
      });
    }
  });
}else if(argv2=='mkdir'){
  fs.mkdirSync(argv3);
}else{
  console.error('something is worng!');
  process.exit(1);
}

