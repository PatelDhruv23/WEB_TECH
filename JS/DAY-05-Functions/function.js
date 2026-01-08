//! Function:
//* The function is a blockof code which is used to perform some specific task.

//? Syntax: function identifier () { //code }
//* Here identifier -> function_name

//? Advantage
//* reduces writing repeative logic or same code.

//! Non-Parameterized Function:

function greetUser(){
    console.log("Hello, Guest!");
}

greetUser(); //& Function Call Statement (FCS)
//* FCS is responsible for calling 0r invoking the funtion execution

//! Parameterized Function:

//! What is Parameters?
//* The parameter is temporary variable wich is declared in the function definition
//* It will be replaced by the actual value when the function is called.


//! What is Argument?
//* The arguments are the actual values which is passed inside the Function Call Statement.

function greetUser2(name){
    console.log(`Hello, ${name}!`);
}

greetUser2("Dhruv"); //& Function Call Statement (FCS)

