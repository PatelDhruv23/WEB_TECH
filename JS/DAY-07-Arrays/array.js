//! Array:
    //* Array is a special type of object in JS.
    //* The array is a collection of multiple elements.
    //* The array may be homogeneous or heterogeneous.

//? 1. Homogeneous Array:
    //* The array which consist of same type of data.
    let arrNum = [10,20,30,40]
    let arrNum2 = ['hello','bye','Good Morning']
    console.log(typeof arrNum); //Object

//? 2. Heterogeneous Array:
    //* The array which consist of different type of data.
    let mixedArr = [10, true, null, "Hello", function(){console.log("Function Executed.");},[10,20,30]];

//! Accessing the array elements:
    console.log(mixedArr);
    mixedArr[5]();
    console.log(mixedArr[5][1]); //20

//! Array Property: length
    //? 1. Getting the length:
    console.log(mixedArr.length);//6

    //? 2. Setting the length:
    mixedArr.length = 5;
    console.log(mixedArr);

//! Ways to create an array:
    //? 1. By using literal - []
    //? 2. by using Array() constructor

    let arr = new Array(10,20,30,40);
    console.log(arr); // [10,20,30,40]

    //TODO: NOTE- If you pass only one element to the Array() constructor, it will be considered as a length of the array.
    let arr2 = new Array(5);
    console.log(arr2); // (5) [empty * 5]

//! Array Methods: (Static Methods)
    //? 1. Array.from()
    let str = 'Hello'
    console.log(Array.from(str));

    //? 2. Array.isArray()
    console.log(Array.isArray(arr)); //true

    //? 3. Array.of()
    console.log(Array.of(1,2,3,4,5));

//! Array Instance Methods:
    //? 1. push()
    let numArr = [10, 20];
    console.log(numArr);
    numArr.push(30, 40, 50, 60, 70, 80, 90, 100);
    console.log(numArr);
    
    //? 2. pop():
    numArr.pop();
    console.log(numArr);
    
    //? 3. unshift():
    numArr.unshift("hello");
    console.log(numArr);
    
    //? 4. shift():
    numArr.shift();
    numArr.shift();
    console.log(numArr);
    
    //? 5. slice(startIndex, endIndex):
    console.log(numArr.slice(1, 7));
    
    //? 6. splice(startIndex, deleteCount, [newEle]):
    let heros = ["Iron Man", "Hulk", "Thor", "Deadpool", "Blue Bettle", "Wanda"];
    console.log(heros);
    heros.splice(4, 1, "CA");
    console.log(heros);
    
    //? 7. includes():
    console.log(heros.includes("Hawkey")); // false
    console.log(heros.includes("Thor"));
    
    //? 8. indexOf()
    //? 9. concat()
    let newarr = ["Dr. Strange"];
    console.log(newarr);
    let marval = heros.concat(newarr);
    // console.log(marval);
    console.log(heros.concat(newarr));
    
    //? 10. join()
    console.log(heros.join("-"));
    
    //? 11. reverse()
    console.log(heros.reverse());
    
    //? 12. flat():
    let nestedArr = [10, 20, 30, [40, 50, [60, 70]]];
    console.log(nestedArr);
    console.log(nestedArr.flat(2));
    
    //? 13. find():