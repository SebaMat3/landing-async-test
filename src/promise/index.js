/*  Instantiating a Promise object inside a variable. A promise has 3 states:
1.- _pending_: initial state, neither fulfilled nor rejected.
2 _fulfilled_: meaning that the operation was completed successfully.
3 _rejected_: meaning that the operation failed. */ 
const promise = new Promise(function (resolve,reject) {
    resolve('Hey!');
});

//const cows = 15;
const cows = 9;

//Let's try to implement all the promise features on a function
const countCows = new Promise ((resolve, reject) =>{
    if (cows >= 10){
        //Whats the result if the promise is fullfilled -value:
        resolve (`We have ${cows} cows, let's do it.`);
    } else {
        // The result on promise rejection - error reason:
        reject (`...not enough cows for the job, sorry.`);
    }
});

//Now we can nest further async actions on .then; 
countCows.then((result) => {
console.log(result)
}).catch((error) => { // handle the rejection output with .catch
    console.log(error);
}).finally (() => console.log('Finally')); // Perform actions on promise resolution, independently of succesful-rejected.
