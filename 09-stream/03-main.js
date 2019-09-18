#!/usr/bin/node

const MyReadable=require('./03-my-readable.js'),
      stdout=process.stdout;

var r=new MyReadable;

process.stdin.resume();

r.pipe(stdout);

