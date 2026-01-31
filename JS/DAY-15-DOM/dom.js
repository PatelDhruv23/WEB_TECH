
console.log("DOM in JS");

//! What is DOM?
//* DOM Stands for Document Object Model.
//* DOM is an Application Programming Interface (API) which will allow us to access HTML elements inside the JS to provide functionalities.
//* The Hierarchical representation of a HTML structure in the form of nodes.
//* The inverted tree-like structure of a HTML document is called as DOM.

//! Why do we need DOM?
//* 1. DOM is a bridge between the HTML document and JS Logic.
//* 2. Without DOM we cannot manipulate (create,modify, or remove) the HTML Structure.

//! How to create DOM?
//? When When a browser loads HTML Doocument:
//~ 1. It reads a HTML structure.
//~ 2. It will convert the HTML Elements into the tree-like structure.
//~ 3. This is tree-like structure is known as DOM.

//? That means JavaScript can't talk directly to the HTML structure instead of it will talk to the DOM.

//! Types of DOM:
    //~ 1. Core DOM - All types of Documents
    //~ 2. HTML DOM - only for HTML Document
    //~ 3. XML DOM - only for XML Document
    //~ 4. React DOM - Virtual DOM

//! What is Node?
//* A node is a basic building block in JS.
//* OR A node is a piece of item in JS which will represent different types of items is called as node.

    //! Types of Node:
    //* 1. document node: -> top-most node (root node)
    //* 2. element node: -> h1, p, div, img, ul, etc -> All HTML Elements
    //* 3. attribute node: -> id, class, src, href, alt, etc -> Attributes
    //* 4. comment node: Comment inside the HTML
    //* 5. leaf node: -> The node present at the end of the hierarchy is called as Leaf node.
    //* 6. text node: -> Text node represents the content or text inside the HTML Elements
    //* 7. DocumentFragment node:

//! What is Document?
//? The document is global object provided by the browser.
//? Here document represents the HTML Structure.

//^ document properties: (Direct Access Properties)
//? Syntax: document.propertyName
console.log(document); //HTML Structure

//? 1. document.title
console.log(document.title);
document.title = "Updated DOM Document"
console.log(document.title);
console.log(document);

//? 2. document.head
console.log(document.head);

//? 3. document.body
console.log(document.body);

//? 4. document.URL
console.log(document.URL);

//? 5. document.all
console.log(document.all); //HTMLCollection

//! Indirect Access of HTML Elements:
//* Indirect access means accessing the html elements by taking reference of an another elements.

let list = document.getElementById("list");
console.log(list);  // 1st li

//* 1. parentElement
console.log(list.parentElement);
console.log(list.parentNode)
console.log(list.parentElement.parentElement);

//* 2. nextElementSibling:
console.log(list.nextElementSibling);

//* 3. childNodes:
//? The childNodes return all types of nodes (elements, text, comment, whitespace considered as text, etc)
let box = document.getElementById("box") 
console.log(box.childNodes); // NodeList(7) [text, h1, text, p, text, span, text]

//* 4. children:
//? The children returns only HTML nodes(HTML Elements Only).
//? It ignores the text, attribute, and comment node.
console.log(box.children); // HTMLCollection(3) [h1, p, span]




