
console.log("Math Object");

//! Math Object:
//* The math object is used to perform mathematical operations such as generating the random number, rounding off values, for trignometric functions, etc.

//* Without creating the math object, we can use the math properties and methods.

//! Math Object Properties:

//? 1. Math.PI:
console.log(Math.PI); //3.14

//? 2. Math.E: (E stands here as Euler's Constant)
console.log(Math.E);

//! Math Methods:

//? 1. Math.round():
console.log(Math.round(4.67)); //5
console.log(Math.round(4.32)); //4

//? 2. Math.floor():
console.log(Math.floor(8.1)); //8
console.log(Math.floor(8.9)); //8

//? 3. Math.ceil():
console.log(Math.ceil(8.1)); //9
console.log(Math.ceil(8.8)); //9

//? 4. Math.sqrt():
console.log(Math.sqrt(49)); //7

//? 5. Math.cbrt():
console.log(Math.cbrt(27)); //3

//? 6. Math.min():
console.log(Math.min(1,2,3,4,5,65,67)); //67

//? 7. Math.max():
console.log(Math.min(1,2,3,4,5,6,78,99)); //99

//? 8. Math.trunc():
console.log(Math.trunc(4.5)); //4
console.log(Math.trunc(-4.5)); //-4

//? 9. Math.pow(base,exponent):
console.log(Math.pow(5,2)); //25
console.log(Math.pow(5,-2)); //0.04

//? 10. Math.abs(): Returns the positive value
console.log(Math.abs(10)); //10
console.log(Math.abs(-10)); //10

//? 11. Math.random():
//* Math.random() will generate the random numbers in between 0 (included) and 1 (excluded).
//~ Range: 0.000 - 0.999
console.log(Math.random());

//! Generate 4 Digit OTP:
function generateOTP(){
    let otp = Math.floor(Math.random() *  9000 + 1000);
    console.log("OTP: ",otp);
    document.getElementById("otpDisplay").innerHTML = "OTP: " + otp;
}

document.getElementById("btn").addEventListener("click", generateOTP);
