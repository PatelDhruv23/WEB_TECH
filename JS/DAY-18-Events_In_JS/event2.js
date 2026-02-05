
console.log("Event Handling in JS");

//! 2. Form Events:

let username = document.querySelector("input[type='text']");
console.log(username);

username.addEventListener("focus", ()=> {
    username.style.outline = "none";
    username.style.border = "2px solid green";
})

username.addEventListener("blur", ()=> {
    username.style.outline = "none";
    username.style.border = "2px solid red";
})

document.getElementById("myText").addEventListener("keyup", (e)=>{
    console.log(e.key);
})

document.getElementById("coding").addEventListener("keyup", (e)=>{
    if (e.ctrlKey && e.key == 'c'){
        e.preventDefault();
        alert("dont do that");
    }
})

document.getElementById("coding").addEventListener("keydown", (e)=>{
    if (e.ctrlKey && e.key == 'v'){
        e.preventDefault();
        alert("dont do that");
    }
})

let editor = document.getElementById("editor");

document.addEventListener("copy", (e)=>{
    console.log("Text Copied");
    const data = document.getSelection().toString();
    console.log('User Copied: ',data);

    e.clipboardData.setData("text/plain","mat kar lala");
    console.log(data);
    e.preventDefault();
});

editor.addEventListener("cut",(e)=>{
    console.log("text is cut");
});

editor.addEventListener("paste",(e)=>{
    console.log("text is pasted");
})
