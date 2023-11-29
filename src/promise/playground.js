
function delay(time, message) {
    //inmediately returns a Promise
    return new Promise ((resolve) => {
            // Which anonymous callback function starts a setTimeout 
            (setTimeout(() =>{
                // That sets the message arg as resolve value
                resolve (message);
            //After the arg time value.
            },time));
    })
}


delay(2000, "Hello after 2s")
.then((message) => console.log(message))


// Might be better to declare the function delay as a callback inside the promise? ...