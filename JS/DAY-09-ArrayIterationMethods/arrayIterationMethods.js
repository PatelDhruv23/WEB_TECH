
//! Array Iteration Methods:
//* Array iteration methods are also known as advanced array methods for modern JS as well as React JS.
//* Array iteration methods are used to loop through automatically on an array and perform some operation for each and every element.

let numbers = [1,2,3,4,5];
//! Traditional Way to iterate on an array:
for (let i = 0; i< numbers.length; i++){
    console.log(numbers);
}

//! 1. map():
//* The map() method is used to iterate on an array and it transform each and every element present inside the array.
//* It will create a new array instead of modifying original array.
//? Syntax: arr.map((cValue, cIndex, cArray) => {})
//? Return Type: New Transformed Array

let squareNumArr = numbers.map((cValue, cIndex, cArray) => {
    console.log(cValue);
    console.log(cIndex);
    console.log(cArray);
    return cValue * cValue
});

console.log(squareNumArr);
console.log(numbers);

let heros = ["Dhruv", "HRX", "Salman Khan", "SRK"];
heros.map((hero, index) => {
    console.log(hero);
});

//! thisArg:
//* thisArg will refers to the external object.
let obj = {
   value : 10,
}

let updatedArr = numbers.map(function(num){
    return num + this.value
}, obj)
console.log(updatedArr);

//! 2. filter
//* The filter() method is used to filter out elements based on matching condition.

//? Syntax: filter((cValue, cIndex, ,cArray) => {})
//? Return Type: New Array (true or false)

//~ If condition is true -> Add
//~ If condition is false -> Not Add

let randonNumbers = [18,45,7,333,33,8,63,93]
let evenNumbers = randonNumbers.filter((num) => {
    return num % 2 == 0;
});
console.log(evenNumbers);

let evenNumbers2 = randonNumbers.map((num) => {
    if (num % 2 == 0){
        return num;
    }
});
console.log(evenNumbers2);


//~ example

let products = [
  {
    name: "Himalaya Herbals Purifying Neem Face Wash",
    price: 180.0,
    category: "Personal Care",
  },
  {
    name: "Mamaearth Onion Hair Oil",
    price: 399.0,
    category: "Personal Care",
  },
  {
    name: "Saffola Gold Blended Edible Oil (5L)",
    price: 680.0,
    category: "Groceries",
  },
  {
    name: "Amul Butter (500g)",
    price: 260.0,
    category: "Groceries",
  },
  {
    name: "Prestige Svachh Pressure Cooker (3L)",
    price: 1350.0,
    category: "Home Appliances",
  },
  {
    name: "Bajaj Pulsar 150 Motorcycle",
    price: 110000.0,
    category: "Vehicles",
  },
  {
    name: "Tata Salt (1kg)",
    price: 30.0,
    category: "Groceries",
  },
  {
    name: "Fastrack Analogue Watch (Men's)",
    price: 2500.0,
    category: "Accessories",
  },
  {
    name: "Mi Super Bass Wireless Headphones",
    price: 1799.0,
    category: "Electronics",
  },
  {
    name: "Patanjali Dant Kanti Toothpaste",
    price: 90.0,
    category: "Personal Care",
  },
]

let personalCare = products.filter((product) => {

    return product.category === "Personal Care"

})

console.log(personalCare)