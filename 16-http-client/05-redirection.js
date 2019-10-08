#!/usr/bin/node


const addr='http://www.sian.com/',
      http=require('http');
function get(){

  http.get(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`);
  
  
   //print head line
  console.log(res.headers);
  console.log('');

  res.pipe(process.stdout);
  });
 if(res.statusCode<400 && rea.statusCode>=300)
   get(res.headers.location);

};



 


