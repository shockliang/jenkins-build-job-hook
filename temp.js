// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);

// console.log(found);

var str = 'U   branches/dev/test.txt';
var toFind = 'branches/dev';
var re = new RegExp(toFind,"g");

found = str.match(re);

console.log(found);