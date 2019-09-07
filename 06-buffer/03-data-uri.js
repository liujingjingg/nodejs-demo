#!/usr/bin/node
const fs=require('fs'),
      log=consolg.log,
      http=require('http');
var data=fs.readFileSync('./qr-code.jpg').toString('base64');
var html=''
log(data);
http.createServer((req,res)=>{

}.listen(8080))

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <img src="data:image/jpg:base64,data">
</body>
</html>i:wq

