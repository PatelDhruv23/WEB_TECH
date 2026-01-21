
const smartBulb = {
    brand : "Lumina",
    brightness : 80,
    isOn: false,
};
console.log(smartBulb);

//! 1. Object.keys():
//* It will return all the keys of an object in the form of array.
console.log(Object.keys(smartBulb));

//! 1. Object.values():
//* It will return all the values of an object in the form of array.
console.log(Object.values(smartBulb));

//! 3. Object.assign():
//? Syntax: Object.assign(target_obj, new_obj);

//* It is used to create a new object.
let newalyCreatedObj = Object.assign({}, {name: "john", age: 20});
console.log(newalyCreatedObj);

//* It is used to merge two different objects.
let obj1 = { name: "john"};
let obj2 = { age: 20};

let mergedObj = Object.assign(obj1,obj2);
console.log(mergedObj);

//! 4. Object.entries():
//* It will return a nested array with each key-value pair
console.log(Object.entries(smartBulb));

//! 5. Object.fromEntries():
//* It is used to create an object using entries which is present in the form of key-value pair.
let mobiles = [
    ["brand", "Samsung"],
    ["Model", "S26"],
];
console.log(Object.fromEntries(mobiles));
