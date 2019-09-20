#!/usr/bin/node

var user = {name:'王顶',
            age:22,
            qq :'949694044'};
console.log('name: %s',user.name);
console.log('age:%d',user.age);
console.log('JSON: %j',user);
console.error('Error! something wrong!');



console.log('qq:%s',user.qq);
console.log('qq:',user.qq);
console.log('qq:'+user.qq);
console.log(`qq: ${user.qq}`);
