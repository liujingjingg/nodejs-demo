#!/usr/bin/node


var argv =process.argv;

console.log('arguments number:',argv.length);
console.log('arguments:',argv);


var expression =argv[2];
console.log(expression +'=%d',eval(expression));


if (typeof(expression)==='undefined' ||
    expression==='--help' ||
    expression==='-h'){
      help();
    }else{
      calc();
    }


function help(){
  const msg=''
    +'usage:cmd-name[OPTION][expression]\n'
    +'evaluate the expression.\n'
    +'\n'
    +'Mandatory arguments to long optiond are short ptions too.\n'
    +'  -h,--help output help information and exit\n';
  console.log(msg);
}

function calc(){
  console.log(expression +'=%s',eval(expression));
}
