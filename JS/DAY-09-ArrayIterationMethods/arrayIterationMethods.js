
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

//! 3. reduce():
//* The reduce() method is used to convert all the array elements into the single value or output.
//? Syntax: arr.reduce((acc, cValue, cIndex, cArray) => {})
//? Return Type: Single Value

let values = [11,20,31,41,50];

let sum = values.reduce((acc, cValue, cIndex, cArray) => {

  console.log("acc:", acc, "cValue:", cValue, "cIndex:", cIndex);

  if (cValue % 2 == 0){
    return acc + cValue
  }
  return acc

},0)

console.log(sum);

let cart = [
  {name: "mobile", price: 25000, qty: 2},
  {name: "watch", price: 5000, qty: 2},
  {name: "earbuds", price: 2000, qty: 3},
]

let total = cart.reduce((acc,cValue)=>{

  return acc + (cValue.price*cValue.qty);

},0)

let subtotal = (total - (total*0.10))

console.log("Total Amount: ",total);
console.log("Discount: ",total*0.10);
console.log("SubTotal: ",subtotal);

//! 4. forEach():
//* forEach() method is used to iterate on each element of an array but it will 
//? Syntax: arr.forEach((cValue, cIndex, cArray)=>{})
//? Return Type: undefined

let updatedValues = values.forEach((num)=>{
  return num + 10;
})
console.log(updatedValues);

//! Key difference: map() and forEach()
//~ The map() method will return a new array, but forEach() will not return anything.
//~ It is just used for iterating purpose.
