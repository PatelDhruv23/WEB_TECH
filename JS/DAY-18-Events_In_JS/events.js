//! Event:
//* Event is an object in JS.
//* The change in a state of an object is called as Event.
//* Whenever event will trigger, one function will be invoked or called.

function notify(){
    alert("Button is clickedddd!")
}

//! Types of Events:
//& 1. Mouse Events
//& 2. Form Events
//& 3. Clipboard Events
//& 4. Keyboard Events
//& 5. Window Events

//! What is addEventListener()?
//* The addEventListener() method is used to add or attach the event in JavaScript.

//! 1. Mouse Events

    //? Syntax: addEventListener(event_type, callback_function)

    let btn = document.getElementById("btn1");

    //! 1st Way:
    btn.addEventListener("click", function (){
        alert("How Are You?");
    });

    //! 2nd Way:
    btn.addEventListener("click",()=>{
        alert("How are You?");
    });

    //! 3rd Way:
    function greet(){
        alert("Hellloooo!!")
    }
    btn.addEventListener("click",greet)

    //! What is e?
    //* e stands for event in callback function.
    //* e consists of properties of an event triggered by the user.

    let btns = document.querySelectorAll(".btn");
    console.log(btns);

    btns.forEach((btn)=>{
        btn.addEventListener("click", (e) => {
            console.log(e);
            console.log(e.target);
            console.log(e.target.name);
        })

    })

//! 2. Form Events:
    //* How to access the value from an input field?

    let loginForm = document.getElementById("loginForm");
    console.log(loginForm);

    //! e.preventDefault():
    //* The e.preventDefault() method prevents the default behaviour of an HTML Element such as reloading page at the time of form submission, scrolling page, at the time of navigating page reloading, etc.

    loginForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let username = document.getElementById("username");
        console.log(username.value);
    });

//! Difference Between Change and Input:



