#!/usr/bin/node
const server=require('http').createServer(),
      assert=require('assert'),
      log=console.log;
server.on('request',(req,res)=>{
  log(req.headers);
  switch(req.url){
    case'/':
      sendNormalMsg(res);
      break;

    case'/admin':
      sendSecreMsg(req,res);
      break;

    default:
      sendErrorMsg(res);
  }
});

server.listen(8080);

function getUserNamePasswd(str){
   var msg=str.split(' ');
   assert.equal(msg.length,2,'must to be 2');
   assert.equal(msg[0],'Basic','must to be Basic');

   var account=Buffer.from(msg[1],'base64');
   msg=account.toString('utf8'.split(':'));

   return{
     userName:msg[0],
     passWord:msg[1]
   };
}

function sendSecreMsg(req,res){
  if(req.headers.authorization){
    var usr=getUserNamePasswd(req.headers.authorization);
    console.log('\nauth:',usr);
    if(usr.userName==='wangding' && usr.passWord==='123'){
      res.end('OK! wangding\'s mobile number:12312535');
      return;
    }
  }
  res.writeHead(401,{'WWW-Authenticate':'Basic'});
  res.end('who you are?');
}

function sendNormalMsg(res){
  res.end('Dood Day!');
}

function sendErrorMsg(res){
  res.statusCode=404;
  res.end('404 ERROR,resource not found!');
}
