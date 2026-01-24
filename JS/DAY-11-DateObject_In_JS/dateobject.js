console.log("Date Object");
 
//! Date Object:
//* Date is an inbuilt object in JS.
//* Date is used to handle and manipulate the date in JS

//? Syntax:
let todayDate = new Date();
console.log(todayDate); // Sat Jan 24 2026 15:03:40 GMT+0530 (India Standard Time)

//! Date Methods: (To Access the date)
//? 1. getFullYear();
console.log(todayDate.getFullYear()); // 2026

//? 2. getDay();
console.log(todayDate.getDay()); // 6 -> Saturday

//? 3. getDate();
console.log(todayDate.getDate()); // 24

//? 4. getMonth();
console.log(todayDate.getMonth()); // 0

//? 5. getHours();
console.log(todayDate.getHours()); //15

//? 6. getMinutes();
console.log(todayDate.getMinutes()); //13

//? 7. getSeconds();
console.log(todayDate.getSeconds()); //updated after each seconds

//? 8. getMilliseconds();
console.log(todayDate.getMilliseconds()); //updated after each Milliseconds

//! Formatting the Date 

let currentDate = new Date();
console.log(currentDate);

let date = currentDate.getDate();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let year = currentDate.getFullYear();

let formattedDate = `${date}-${month}-${year}`;
console.log(formattedDate);

//! Date Set Methods:
let myDate = new Date();

//? Setting the Year
myDate.setFullYear("2027");
myDate.setDate("23");
myDate.setMonth("3");
myDate.setMinutes("10");
console.log(myDate);

//! Shortcut:
let demoDate = new Date("2027", "5", "3", "12", "32", "24", "566");
console.log(demoDate);