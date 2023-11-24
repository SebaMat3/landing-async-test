function sum (num1, num2) {
    return num1 + num2
};

function calc (num1, num2, callback){
    return callback(num1,num2);
};

console.log(calc(54, 54, sum));

//Lets test asynchronism
//setTimeout with anonymous function as callback
setTimeout(function (){
    console.log('Hello, World');
}, 2000);

//A function to give to a setTimeout
function greeting(name) {
    console.log(`Hi ${name}!`);
}

//calling a declared function for setTimeout
//syntax: setTimeout(function, timeDelay, functionArg)
setTimeout(greeting, 5000,'SebaMate');


