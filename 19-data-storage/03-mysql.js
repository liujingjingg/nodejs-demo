#!/usr/bin/node
console.log('hello world!');
const mysql=require('mysql'),
      con =mysql.createConnection({
        user:'root',
        host:'localhost',
        password:'liujingjing0902',
        database:'test',
      });

con.connect();

//增
con.query('insert into books(book_id,title,status) values(?,?,?)',['103','wangding',0],(err,result)=>{
  if(err){
  console.error(err.message);
  process.exit(1);
}
console.log(result);
})
