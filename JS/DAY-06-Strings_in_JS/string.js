console.log("String in JS");

//! String:
//* String is the collection of characters.
//* String is immutable in nature.

//? How many ways we can create the string:
//* 1. By using single quotes ('')
//* 2. By using double quotes ("")
//* 3. By using String Template Literal (Backticks) (``)

//! We can create a string with the help of String() constructor:

let strObject = new String("Hello");
console.log(strObject);
console.log(typeof strObject);

//! String Properties: length
//* The length property it is used to count the characters present inside the given string.
//? Return Type: number

let str1 = "Hello World!";
console.log(str1.length); // 12

//! String Methods:

//! 1. charAt():
//* Returns the character at the specified index.
//? Syntax: str.charAt()
//? Return Type: Character
let str2 = "JavaScript";
console.log(str2.charAt(4)); // S
console.log(str2.charAt(3)); // a

//! 2. indexOf():
//*
//? Syntax:
//? Return Type:
console.log(str2.indexOf("va"));

//! 3. includes():
//*
//? Syntax:
//? Return Type:
console.log(str2.includes("script")); // true
