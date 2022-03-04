'use strict';

// function greet($greeting = 'Hello World') {
//   console.log($greeting);
// }
// greet();

// Spread operators

let args1 = [1, 2, 3];
let args2 = [4, 5, 6, 7];

function test() {
  console.log(args1 + ',' + args2);
}
test(...args1, ...args2);
