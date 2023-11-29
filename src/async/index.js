// expressive arrow function inside a variable
const fnAsync = () => { 
    return new Promise((resolve, reject) => {
    //in which body we'll verify the success of the promise with a ternary conditional,friendly way to write and read conditionals
        (true) //condition, in this case forced to be true.
            ? setTimeout(() => resolve('Async!'), 2000) // in true case, setTimeOut anonymous arrow function
            : reject (new Error('Error'));
    });
}
    
// Now we're declaring an async arrow function
const anotherFn = async () => {
    // from which we can "await" call our delayed promise
    const something = await fnAsync();
    // print it once it's ready
    console.log(something);
    // only then print 'Hello'
    console.log('Hello');
}
// Once executing these instructions, be prepared to see asynchronism shining!
console.log('Before');
anotherFn();
console.log('After');

/*  Out put:
Before
After
Async!
Hello 

    See how the last two prints comes from the anotherFn() calling, despite being called in between the other 2
    without blocking the 'After' print.*/