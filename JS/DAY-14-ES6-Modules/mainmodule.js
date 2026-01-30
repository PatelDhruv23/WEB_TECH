import add from "./add.js" //* Default Import
import { userName, age } from "./add.js"; //* Named Import

//! What is Module? 
//* A module is a seperate file.
//* Modules allows us to divide the JavaScript code into seperate files for easy readability and  organized code.

//! Types of Modules:
//? There are two types of Modules:
//* 1. ES6 Modules -> import/export -> import/export -> React.js
//* 2. Common JS Modules -> require() and module.exports() -> node.js

//! Use the logic in a main file
console.log(add(10,20));
console.log(userName);
console.log(age);

let newage = age - 10
console.log(newage); 

