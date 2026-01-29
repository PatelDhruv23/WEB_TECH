
//! ES6 Concepts
//* ES stands for ECMA scripts which was released in year 2015.
//* ES6 was major update in JS history
//* They have introduced some important features such as:

//? 1. let and const variable
//? 2. Arrow Function (Fat-Arrow Function)
//? 3. Symbol -> Primitive Data Types
//? 4. Function with default parameter 
//? 5. Destructuring
//? 6. Spread Operator and Rest Operator
//? 7. Modules
//? 8. Promise
//? 9. async and await
//? 10. Class
//? 11. String Template Literal (Backticks)(``)

//! 4. Function with default parameters
//* The parameter which is passed inside the function defination with default values is called as function with default parameter.

function greet(name = 'Guest'){
    console.log(`Hello ${name}, How are you?`);
}
greet('Dhruv');
greet();

//! 5. Destructuring:
    //* Destructuring means divide or breaking down big-structure into small values (variables) for easy use or access.

    //? 1. Array Destructuring:
    let mixedArray = [
        10,
        'John',
        true,
        null,
        {name: 'Unknown', age: 'Immortal'},
        function(){
            console.log("This is Function inside the array");
        },
        [30,40,50],
    ];

    //! Traditional Way to access the array element:
    console.log(mixedArray[0]);

    //! Destructuring of an array:
    let [a,b,c,d,e,f,g] = mixedArray;
    console.log(a);
    console.log(b);
    console.log(g);

    //! Again we are destructuring:
    let [x,y,z]= g;
    console.log(x);

    f();

    console.log(e);
    console.log(e.name);
    console.log(e.age);

 //? 2. Object Destructuring.
    //~ IMP Note: When you are destructuring the object, you must use the same keyname of an object inside the destructuring.
 let employee = {
    eName: 'Dhruv Patel',
    eAge: 23,
    ePackage: '3LPA',
    eGender: 'Male',
    eSkills: ['SQL', 'Web Tech', 'Python', 'Soft Skills'],
    eAddress: {
        eCity: 'Ahmedabad',
        ePincode: 380009,
        eState: "Gujarat",
        eCountry: "India",
    },
    eCompanyDetails: {
        eDesg: 'Data Migration Engineer',
        eShift: '2 To 11',
    },
    eManagerDetails: {
        eName: 'Mr. X',
    },
 };
 
 //! Destructuring the employee Object
 let {eName, eAge, ePackage, eAddress, eSkills, eGender, eCompanyDetails, eManagerDetails} = employee;

 console.log(eName);
 console.log(ePackage);
 console.log(eSkills);
 let [p,q,r,s] = eSkills;
 console.log(r);
 console.log(eCompanyDetails);

 let {eDesg, eShift} = eCompanyDetails;
 console.log(eDesg);
 console.log(eShift);

 //! Aliasing the key which is already present in the object:
 let {eName:eManagerName} = eManagerDetails;
 console.log(eManagerName);


//! 6. Spread Operator:
//* Spread Operator is used to spread or unpack the values.
//? Syntax: ...varName
//* RHS Side or Inside the Function Call Statement

//! 7. Rest Parameter:
//* Rest parameter is used to collect remaining values.
//? Synrax: ...varName
//* LHS Side or inside the function defination.

//! Spread Operator with Array:
let arr1 = [10,20,30]; 
let arr2 = [40,50];

let newArr = [...arr1, ...arr2];
console.log(newArr);

//! Spread Operator with Object:
let obj1 = {name:"Dhruv"};
let obj2 = {...obj1, age: 23};
console.log(obj2);

//! Spread Operator with Function:
function getNumbers(...nums){
    // Here, ...nums -> rest parameter
    console.log(nums[3]);
}
let numbers = [10,20,30,40,50];
getNumbers(...numbers)
// Here, ...numbers -> Spread Operator

//! Rest Parameter with Array:
let marvelHeros = ["Iron Man","Hulk","Thor","Black Widow","Black Panther"];
console.log(marvelHeros);

let [im, h, t, ...baccheHue] = marvelHeros;
console.log(im);
console.log(h);
console.log(t);
console.log(baccheHue); // ["Black Widow","Black Panther"]

//! When updating a sigle property of an object:
let movie = {
    mName: 'Meizyaghan',
    mLang: 'Tamil',
    mGenre: 'Drama',
    mCast: ['Karthi', 'Arvind Swamy'],
    mPlatform: 'Amazon',
};
let moviesSeries = {
    ...movie,
    mPlatform: 'Netflix',
    mCollection: '100cr',
};
console.log(moviesSeries);