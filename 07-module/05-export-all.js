#!/usr/bin/node
module.exports = {
 pi: require('./02-export-var'),
 circle: require('./02-export-function'),
 Circle: require('./02-object')
};
console.dir(module);
