
//! DOM Manipulation Methods:
//* It allows us to create, remove, change or modify the HTML Elements inside the JS.
//* Basically we will create the HTMl elements dynamically inside the JS itself instead of writing inside HTML Document.

//! Types of DOM Manipulation Methods:
//? 1. document.createElement()
//? 2. document.appendChild()
//? 3. document.removeChild()

//! Creating HTML Element:
let para = document.createElement("p");
console.log(para);

//! Adding Attributes to the created Element:
para.className = "para";
para.id = "para1";

para.innerText = "This is paragraph is created dynamically with the help of createElement()";

document.getElementById("create-btn").addEventListener("click", ()=>{
    document.getElementById("container").appendChild(para);
    document.getElementById("container").style.backgroundColor = "greenyellow"
});

document.getElementById("remove-btn").addEventListener("click", ()=>{
    document.getElementById("container").removeChild(para);
    document.getElementById("container").style.backgroundColor = "white"
});
