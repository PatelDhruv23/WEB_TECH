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
//? 7. Nested Functuion
//? 8. HOF Function
//? 9. Closure Function
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
    //* Implicit return means of only one statement is present inside your function there is no need to mention curly brackets as well as return keyword.

    //* You can omit the {} and return keyword.

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

/* function orderFood(waiter){
    console.log(`👨‍🍳: Sir What you want?
        1. Chai
        2. Coffee`);
    waiter()
}

orderFood(serveFood);
orderFood(reviewFood); 

/* function serveFood(){
    console.log("Enjoy Your Food 🍴");
}

function reviewFood(){
    console.log("It was an delicious food 💌");
}

document.getElementById("orderServe").addEventListener("click", function() {orderFood(serveFood)});
document.getElementById("orderReview").addEventListener("click", () => {orderFood(reviewFood)});  */


//! Example of callback function:
//? 1st way to create a callback function:
//~ We will create the seperate/another function and pass it as a reference to the main function.

function sir(studentName, callback){
    console.log("Sir, is checking papers!");
    setTimeout(()=>{
        console.log("Papers checked");
        console.log(`Result for ${studentName}:`);
        callback();
    }, 3000)
}

//~ Callback Function
function result(){
    console.log("PASS.");
}

sir("John",result);

//? 2nd way: Directly mention the callback function inside the main function FCS.

function orderFood(callback){
    console.log("Food Is Ordered");
    callback();
}

//~ Here orderFood is a HOF
orderFood(function () {
    console.log("Smit is your delivery Boy!");
});

orderFood(()=>{
    console.log("Dhruv is your delivery Boy!");
})

//! 7. HOF: Higher Order Function
//* A function which will accept another function as a argument or it will return another function is called as Higher-Order Function.

//^ example:

//HOF
function calculate(num1, num2, operation){
    return operation(num1,num2);
}

//callback functions
function addi(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num2 - num1; 
}
function mul(num1, num2){
    return num1 * num2; 
}
function div(num1, num2){
    return num2 / num1; 
}

//FCS
console.log(calculate(10,30,addi));
console.log(calculate(10,30,sub));
console.log(calculate(10,30,mul));
console.log(calculate(10,30,div));


//! 8. Nested Functions:
//* The function is prresent inside another function is known as Nested Function.

function outer(){
    console.log("This is Outer Function");
    let outerVar = 10;

    function inner(){
        console.log("This is Inner Function");
        console.log(outerVar);
    }
    inner();
}
outer();

//! 9. Outer Function:
//* If you are trying to access the outer function variables or data inside the inner function that time it will create the closure by the other function.
//? Here, closure means remembering the value of outer function inside the inner function.

//! 10. Generator Function:
//* The Generator function is a special type of function which will pause and resume its execution.
//? yield -> pause the execution and store the value.
//? .next() -> resume the execution and again pause it.

//? Syntax: function* identifier()

function* netflixSeries(){
    yield "Episode-1";
    yield "Episode-2";
    yield "Episode-3";
}

let episode = netflixSeries();
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());