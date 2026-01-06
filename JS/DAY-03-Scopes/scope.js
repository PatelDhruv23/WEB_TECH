//!What is Scope in JS: 
//The scope is a accessibility or visibility of the variable 

//? Types of Scope:(5)
//~ 1. Global Scope
//~ 2. Block Scope
//~ 3. Local or Function Scope
//~ 4. Script Scope
//~ 5. Module Scope

//! 1. Global Scope:
//* We can access the variable anywhere in the program
//^ debugger
//* the 'debugger' is a keyword in JS
//* the debugger automatically enables the debugging for JS code.

var num = 10
console.log("num:",10)

//! 2. Block Scope:
//* The variable which is declared whith let or const has always block scope.
//* That means we can access only inside the block itself.

//Block
{
    var num1 = 10;
    let num2 = 20;
    const num3 = 30;
    console.log("Num1:",num1);
    console.log("Num2:",num2);
    console.log("Num3:",num3);
}

/* console.log("Num1:",num1);
console.log("Num2:",num2);
console.log("Num3:",num3); */ //variable not defined

//! 3. Local or Function Scope:
//* The variable which is declared with var, let and const are always local to function.

function localFunc(){
    var a =  10;
    let b = 20;
    const c = 30;
    console.log("a:",a)
    console.log("b:",b)
    console.log("c:",c)
}
localFunc();

//! 4. Script Scope:
//* The variable which is declared with let or const and are not in the block or local scope than their scope is said to be Script Scope. 
let x = 10;
const y = 20;
console.log("X:",x)
console.log("Y:",y)
