console.log("Variable")
//* Variable is a memory location or container to store data.
// Identifier is the name given to a variable
// There are 3 Ways to create variable

//? 1. var
//? 2. let
//? 3. const

//* 2. const: const variable intoduced in ES6 which was released in 2015.

// 1. Declaration: NO
/* const num;
console.log(num); */

// 2. Initialization: NO
num = 20;

// 3. D + I: YES
const num2 = 20;
console.log(num2);

// 4. R-D: NO
//const num2 = 30; ERROR: Cannot redeclare block-scoped variable 'num'.
//console.log(num);

// 5. R-I: NO
num2 = 100;
console.log(num2); //ERROR: TypeError: Assignment to constant variable.