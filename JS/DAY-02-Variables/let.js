console.log("Variable")
//* Variable is a memory location or container to store data.
// Identifier is the name given to a variable
// There are 3 Ways to create variable

//? 1. var
//? 2. let
//? 3. const

//* 2. let: let variable intoduced in ES6 which was released in 2015.

// 1. Declaration: YES
let num;
console.log(num);

// 2. Initialization: YES
num = 10;

// 3. D + I: YES
var num2 = 20;
console.log(num2);

// 4. R-D: NO
//let num = 30; ERROR: Cannot redeclare block-scoped variable 'num'.
console.log(num);

// 5. R-I: YES
num2 = 100;
console.log(num2);