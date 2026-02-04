console.log("Document Obbject Model Methods in JS");

//! DOM Direct Access Properties:

//? 1. document.images
console.log(document.images);

//? 2. document.forms
console.log(document.forms);

//? 3. document.links
console.log(document.links);

//? 4. document.stylesheets
console.log(document.styleSheets);

//? 5. document.scripts
console.log(document.scripts);


//! DOM Access Methods:


//! 1. document.getElementById():
    //* The document.getElementById() method is used to access the HTML element by their specific id.
    //~ Syntax: document.getElementById("id")
    //& Return Type: HTML Element or null
    let heading = document.getElementById("head");
    console.log(heading);

    //? Style attribute:
    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";


//! 2. document.getElementsByClassName():
    //* The document.getElementsByClassName() method is used to access the HTML elements by their Class Name.
    //~ Syntax: document.getElementsByClassName("class-name");
    //& Return Type: HTMLCollection

    //? HTMLCollection:
    //* The collection or group of HTML Elements only is called as HTML Collection.
    //* It will look like an array but it is not an actual or true array.

    let paras = document.getElementsByClassName("para");
    console.log(paras);

    console.log(Array.isArray(paras)); //false

    //! Converting the HTMLCollection into the Array:
    //! 1. Array.from():
    let convertedHTMLCollection = Array.from(paras);
    console.log(convertedHTMLCollection);
    console.log(Array.isArray(convertedHTMLCollection)); //true
    convertedHTMLCollection.forEach((para)=>{

        para.style.border = "2px solid red";

    });

    //! 2. By using Spread Operartor:
    let htmlCollectoionToArray = [...paras]
    console.log(Array.isArray(htmlCollectoionToArray));
    htmlCollectoionToArray.forEach((para,index)=>{
        if (index == 1) {
            para.style.border = "2px solid red";
        }
    });


//! 3. document.getElementsByTagName():
    //* The document.getElementsByTagName() method is used to access the Collection of HTML Elements by their Tag Name.
    //? Syntax: document.getElementsByTagName("p")
    //& Return Type: HTMLCollection []

    let htmlTagNameColelction = document.getElementsByTagName("p");
    console.log(htmlTagNameColelction);


//! 4. document.getElementsByName():
    //* The document.getElementsByName() method is used to access the HTML elements by their specific name value.
    //? Syntax: document.getElementsByName("name-value")
    //& Return Type: NodeList []

    //~ What is NodeList?
    //* The NodeList is a collection of different types of node such as text node, element node, attribute node, comment node, etc.
    //~ By Deafult NodeList supports the ForEach() method but doesn't supports the map() method.
    
    let genders = document.getElementsByName("gender");
    console.log(genders);
    console.log(Array.isArray(genders)); //False

    genders.forEach((gender, index)=>{
        if (index == 0) {
            gender.checked = true;
        }
    })


//! 5. document.querySelector():
    //* The document.querySelector() method is used to access the first matching element by their specific css Selector.
    //? Syntax: document.querySelector("css-selector")
    //& Return Type: First Matching CSS -Element

    let classPara = document.querySelector(".para");
    console.log(classPara);


//! 6. document.querySelectorAll():
    //* The document.querySelectorAll() method is used to access all the elements by their specific css Selector.
    //? Syntax: document.querySelectorAll("css-selector")
    //& Return Type: All Matching CSS -Element

    let classParaAllEle = document.querySelector(".para");
    console.log(classParaAllEle);


