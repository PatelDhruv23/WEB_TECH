
console.log("BOM in JS");

//! BOM:
//* BOM stands for Browser Object Model.
//* BOM - It is used to interact with Browser's screen/window.

//! What is window?
//* window is a global object provided by each and every browser.
//* window will provide some set of properties and methods in JS.

console.log(window); // global object

//? Properties of window object:
    //^ 1. document:
    console.log(document);

    //^ 2. screen:
    console.log(screen);
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.orientation);

    //^ 3. navigator:
    console.log(navigator);
    console.log(navigator.onLine);
    console.log(navigator.platform);
    console.log(navigator.deviceMemory);
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log("Latitude",position.coords.latitude);
        console.log("Longitude",position.coords.longitude);
    })

let statusText = document.getElementById("statusText")

if (navigator.onLine){
    statusText.innerHTML = '🟢You are Online'
    statusText.style.color = 'green'
}
else{
    statusText.innerHTML = '🔴You are Offline'
    statusText.style.color = 'red'
}

    //^ 4. History:

    //^ 5. console:
    



