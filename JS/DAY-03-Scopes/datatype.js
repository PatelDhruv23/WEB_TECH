console.log("DataTypes in JS")

//! What are Datatypes?
//* The datatypes means type or kind of data we can store inside the variable.
//* There are mainly two types of DataTypes
//? 1. Primitive DT
//? 2. Non Primitive DT

//! 1. Primitive DT:
//* Primitive datatypes are the inbuilt datatypes which is provided by the language itself.
//* It can capable to store only Single Value or data.

//? There are 7 types of primitie dt in JS:
//~ 1. number
//~ 2. string
//~ 3. boolean
//~ 4. null 
//~ 5. undefined
//~ 6. bigint
//~ 7. symbol()

//! 1. number:
//* The number includes everything like integers, decimal values, floating values, etc.

let num = 10;
console.log(num);

//? typeof operator:
//* The typeof operator is used to check the which type of data stored inside the given variable.
//? Syntax: typeof(variable) or typeof variable
console.log(typeof(num));
console.log(typeof num);

//! 2. string:
//* The string is a collection of characters:
//? Characters: a-z, A-Z, 0-9, Special Characters(@,#,$,%,&,*,_), Whitespace Character.

//*There are 3 ways to create a String in JS:
//? 1. By using Single Quoutes: ('')
let str = 'Uisng Single Quotes'
console.log(str)
console.log(typeof str)

//? 2. By using Double Quotes: ("")
let str2 = "Using Double Quotes"
console.log(str2)
console.log(typeof str2)

let task = "I can't do it right now"
console.log(task)

//? 2. By using String Template Literal: (``) (Backtick)
let hero = "Prabhas"
console.log(`${hero} is also known as Rebel Star.`)
console.log(`This is the first line
this is the second line
and this is the third line.`)

//! 3. boolean:
//* Boolean will represents the true or false
//? true -> 1 -> yes
//? false -> 0 -> no

let bool = true;
console.log(bool)
console.log(typeof bool)

//! 4. null:
//* The null means nothing or empty but not equals to ZERO.
let nullValue = null;
console.log(nullValue)
console.log(typeof nullValue)

//! 5. undefined:
//* The variable has been declared but not yet assigned the value to the variable.
let undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);


//! 6. Symbol():
//* The Symbol() is a primitive value which is used to create the unique value.
//? Syntax: Symbol(value);

let val1 = Symbol("hello")
let val2 = Symbol("hello")
console.log(val1)
console.log(val2)
console.log(val1.description)
console.log(val2.description)
console.log(val1 == val2)
