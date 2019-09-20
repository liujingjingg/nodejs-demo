#!/usr/bin/node
const log=console.log;

var buf1=new Buffer(256);
buf1[0]=0;
log('buf1 length:',buf1.length);
log('buf1:',buf1);

//循环，依次加1
for (var i=0;i<buf1.length;i++)buf1[i]=i;
log('buf1:',buf1);

//对buffer做切片
var buf2=buf1.slice(246,256);
log('buf2',buf2);
log('buf2 length:',buf2.length);

//填充数据
buf2.fill(0);
log('buf2:',buf2);
log('buf2:',buf2.toJSON());
log('buf2:',JSON.stringify(buf2));

//用数组 初始化buffer
var arr=['a',0xba,0xdf,0x00,255,10];
var buf3=new Buffer(arr);
log('buf3 length',buf3.length);
log('buf3:',buf3);

//用字符串初始化buffer
var buf4=new Buffer('hello world');
log('buf4:',buf4);
log('buf4 length:',buf4.length);

//buffer复制
buf4.copy(buf3,0,0,buf3.length);
log('buf3:',buf3);
log('buf3 length:',buf3);


//UTF8编码
var str='你好 wangding';
var buf5 =new Buffer(str);
log('buf5 length',buf5.length);
log('string length',str.length);
