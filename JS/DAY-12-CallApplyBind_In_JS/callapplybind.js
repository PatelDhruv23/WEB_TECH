console.log("call, apply, bind Methods in JS");

//! Why do we need call(), apply(), bind() method in JS?
//* Basically call(), apply() and bind() method is used to borrow the logic of external function.
//* It is used to manipulate the behaviour of 'this' keyword in JS.

//! 1. call():
//* The call() method is used to borrow the logic of function and pass the dynamic object.
//* The call() method is immediately invoked or call the function with respective object.

//? Syntax: methodName.call(thisArg)
//? And Here thisArg -> Replace with Actual Object

let person1 = {
    username : "Sita",
};
let person2 = {
    username : "Gita",
};

function printName(){
    console.log(`Hello, ${this.username}`);
}

printName.call(person1);
printName.call(person2);


//! 2. apply() method:
//* The apply() method is works same like as call() method, but it will accept the multiple arguments in the form of array.
//? Syntax: methodname.apply(thisArg, [arg1, arg2, ....])

let user1 = {
    username: "Chintu",
};
let user2 = {
    username: "Montu",
};

function printDetails(city, country){
    console.log(`User Details: ${this.username}! City ${city} Country ${country}`);
}

printDetails.apply(user1, ["Ahmedabad", "India"]);
printDetails.apply(user2, ["Mumbai", "India"]);


//! 3. bind() method:
//* The bind() method is used to handle the 'this' keyword behaviour but it will not invoked or called immediately instead of it will return the function.
//? Syntax: methodName.bind(thisArg);

let userInfo = printDetails.bind(user1);
userInfo("Ahmedabad", "India")


