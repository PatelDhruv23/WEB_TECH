//! Function:
    //* The function is a block of code which is used to perform some specific task.
    
    //? Syntax: function identifier () { //code }
    //* Here identifier -> function_name
    
    //? Advantage
    //* reduces writing repeative logic or same code.

//! Non-Parameterized Function:
    //* Function with no parameters 
    
    function greetUser(){
        console.log("Hello, Guest!");
    }
    
    greetUser(); //& Function Call Statement (FCS)
    //* FCS is responsible for calling or invoking the funtion execution

//! Parameterized Function:
    //* Function with parameters 
    
    //! What is Parameters?
    //* The parameter is temporary variable wich is declared in the function definition
    //* It will be replaced by the actual value when the function is called.
    
    
    //! What is Argument?
    //* The arguments are the actual values which is passed inside the Function Call Statement.

    function greetUser2(name){
        console.log(`Hello, ${name}!`);
    }
    
    greetUser2("Dhruv"); //& Function Call Statement (FCS)


//! return keyword or statement in funtion ?
    //* The return keyword is used to return the value back to the caller (FCS) for further use.
    
    function sum(num1, num2){
        let result = num1 + num2;
        return result;
    }
    // sum(7, 18); No output
    
    //? 1st way:
    //^ If the function is returning any value to the function call statement and if you want to access it then store inside any variable and print that variable.
    let output = sum(7,18);
    console.log(output);
    
    //? 2nd way:
    //^ If the function is returning any value to the function call statement and if you want to access it directly  then directly call the FCS inside the clg.
    console.log(sum(7,18));

//! Types of Function:
//? 1. Named Function
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE
//? 5. Arrow Function (Fat Arrow Function)
//? 6. Callback Function
//? 7. Recursive Function
//? 8. Async Function
//? 9. Constructor Function
//? 10. Generator Function
//? 11. Function Currying

//! 1. Named Function:
//* A function which is defined with identifier (name) is called Named Function. 

function motivation(){
    console.log("Work like a madness and achieve like a greatness!");
}

motivation();

//! 2. Anonymous Function:
//* The function which don't have any name is called as Anonymous Function.

    //! 1st way:
    //? Store the anonymous function inside a variable and call that variable with empty().
    
    let mrHashmi = function (){
        console.log("Mr.X");
    };
    console.log(mrHashmi);
    mrHashmi();
    
    //! 2nd way:
    //? Wrap the entire anonymous function inside the empty() and call the empty() inside the outer () or just after teh function block.

    (function (){
        console.log("This is an Anonymous Function");
    }());

//! 3. Function as an expression:
//* A function which is assigined to a variable as a expression is called as Function as an Expression.

    let variable = function (){
        console.log("Mr.X");
    };
    console.log(variable);
    variable();

//& arguments object:
//* The arguments object is used to store all the values which is passed inside the FCS as a actual values.

function getNumbers() {
    console.log(arguments);

    let argumentsObject = arguments;
    console.log(Array.isArray(argumentsObject)); //false
    console.log(arguments[0]);

    console.log(typeof arguments); //object
}

getNumbers(10,20,30);

//! 4. IIFE:
//* The IIFE stands for Immediate Invoking Function Expression.
//* The IIFE function executes only once.

/* (function () {
    alert("Hello")
})();
 */

//! 5. Arrow Function:
//* The arrow function is shorthand syntax to create function in JS.
//* Arrow function is introduced in ES6 concepts which was released in 2015.

//? Syntax: () => {}

let add = (num1, num2) => {
    console.log(num1 + num2);
};
console.log(add);
add(10, 20);
console.log(add(30, 50));


//~ NOTE: Arrow Function don't have their arguments object.
function getNumbers(){
    console.log(arguments);
}
getNumbers(10,20,30)

/* let num = ()=>{
    console.log(arguments);
} */
/* num(10,20,30) */ //Error



    //! Implicit Return
    //? Implicit return means of only one statement is present inside your function there is no need to mention curly brackets as well as return keyword.

    //? You can omit the {} and return keyword.

    let addition = (num1, num2) => num1+num2;
    //Internally is is converted like this:
    // let add = (num1, num2) => {return num1 + num2}

    console.log(addition(10,20));

    //! Explicit Return:
    //* If there are multiple statements is present inside the given function then you have to mention manually curly brackets and return keyword.

    //* If you are mentioning the return keyword manually then you have to must use the curly brackets.

    let explicitFun = () => {
        console.log("First Statements");
        console.log("Second Statements");
        return "2 statements are present inside the function";
    };

    console.log(explicitFun());



//! 6. callback Function:
//* The function is passed to another function as an argument is called as callback function.

function orderFood(waiter){
    console.log(`👨‍🍳: Sir What you want?
        1. Chai
        2. Coffee`);
    waiter()
}

/* orderFood(serveFood);
orderFood(reviewFood); */

function serveFood(){
    console.log("Enjoy Your Food 🍴");
}

function reviewFood(){
    console.log("It was an delicious food 💌");
}

document.getElementById("orderServe").addEventListener("click", function() {orderFood(serveFood)});
document.getElementById("orderReview").addEventListener("click", () => {orderFood(reviewFood)});
