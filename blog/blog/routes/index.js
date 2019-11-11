const express = require('express');
const datajson = require('./data.json');
const router = express.Router();



router.use(express.static('routes')); 
//获取login页面
router.get('/login', function(req, res) {
  res.type('text/html')
  res.status(200)
  res.sendFile(__dirname+ '/login.html'); 
})
//获取list页面
router.get('/list',function(req, res) {
  //判断输入的用户名和密码是否在data.json中已经存在
  var username=req.query.username;
  var pwd=req.query.pwd;
  var usernameafter=datajson.users[0].username;
  var pwdafter=datajson.users[0].password;
  if( username == usernameafter && pwd == pwdafter){
    res.type('text/html')
    res.status(200)
    res.sendFile(__dirname+ '/list.html');
  }else{
    res.send('密码错误');
  }
})
router.get('/datajson',(req,res)=>{
  res.send(datajson)
})

module.exports = router;
