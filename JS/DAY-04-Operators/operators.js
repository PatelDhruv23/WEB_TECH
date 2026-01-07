//! What is Operators?
//* Operators are used to perform a opeartions on operands.

//! Q. What is the difference between == and ===?

let num1 = 10;
let num2 = "10";

//*Here, == will only checks the value not the datatypes.
console.log(num1 == num2); //True

//*Here, === will check both value as well as datatypes.
console.log(num1 === num2); //False

//! String Concatenation Operator (+)
let firstName = "Dhruv "
let middleName = "Rajnikant "
let lastName = "Patel"

let fullName = firstName + middleName + lastName
console.log(fullName)

//! Ternary Operator
let statusCode = 200;

let result = statusCode === 200 ? "OK" : "NOT OK";
console.log(result);

console.log(null + 10);
console.log(null + undefined);
console.log(null + "hello");