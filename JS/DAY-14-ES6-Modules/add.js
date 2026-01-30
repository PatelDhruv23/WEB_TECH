 let userName = 'Smit'; //* Named Export
let age = 22; //* Named Export

function sum(num1, num2){
    return num1 + num2;
};

export default sum;  //* Default Export

 export {userName,age}
