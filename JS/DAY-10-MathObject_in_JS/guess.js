
let randomNum = Math.floor(Math.random()*10 + 1)
// console.log(randomNum);

let guess = Number(prompt("Guess The Number (1-10):"))

if (guess === randomNum){
    console.log("Your Guess is RIGHT");
}
else{
    console.log("Try Again");
}

