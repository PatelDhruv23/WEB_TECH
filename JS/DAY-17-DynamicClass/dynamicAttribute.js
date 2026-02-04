
console.log("Dynamic Class Attribute");

//! Adding Dynamic Attribute:

//? 1. By Using Direct Way:
// .className
// .id

let allParas = document.querySelectorAll("p");
console.log(allParas);

allParas.forEach((pEle, index)=>{
    pEle.className = 'para';
    if (index === 1){
        pEle.id = "secondPara";
    }
});

//? 2. By Using inbuilt methods:
// getAttribute("attribute-name")
// setAttribute("attribute-name", "attribute-value")

let image = document.querySelector("img");
console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));

// setAttribute():
let link = document.querySelector("a");
link.setAttribute("href","https://www.google.com/");
link.setAttribute("target", "_blank");

