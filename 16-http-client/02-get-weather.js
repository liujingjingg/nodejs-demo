#!/usr/bin/node


const http=require('http'),
      addr=process.argv[2] || '石家庄';

var addr = 'http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260';

http.get(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`);
  
  
   //print head line
  console.log(res.headers);
  console.log('');

  res.pipe(process.stdout);
});

