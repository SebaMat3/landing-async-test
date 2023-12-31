//XMLHttpRequest: 'legacy' way of performing AJAX requests, no page reloading needed, broad browsers support.

// 1. After installing 'npm i xmlhttprequest' we may refer to it on a variable
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// 2. Capture the API calling on a const variable (UPPERCASE = not modifiable);
const API = 'https://api.escuelajs.co/api/v1';
const DONE = 4;
const OK = 200;
/* Now we're ready to nest callbacks, to access the various resources that the API provides.
But first, lets create a function that allows us to receive the URL(API) and a given callback 
    => which, in any case will be an anonymous function that receives the API call request:
*/

// (1st-distinguishable name for API URL, 2nd-received data| error from calling)
function fetchData (urlApi, callback) { 
/* There are different ways to perform requests to an API: we could use fetch, but for now let's try using
(instanciating) the XMLHttpRequest object: "It grants control over the whole calling stream" */
    let xhttp = new XMLHttpRequest();

    //XMLHttpRequest.open method -> opens an API connection
    xhttp.open ('GET', urlApi, true); // receives: (1st-HTTP request type, 2nd-URL to use, 3rd-boolean value to enable calling)
    
    //.onreadystatechange -> listens SERVER HTTP status code (404 -> not found, 2xx -> succesful, etc.)
    xhttp.onreadystatechange = function (event) {
    // This function will validate the availability of the API response
        // .readyState = resource loading state 0-UNINITIALIZED 1-LOADING 2-LOADED 3-INTERACTIVE 4 COMPLETED
        if (xhttp.readyState === DONE) { 
            // .status = check the server status code response
            if (xhttp.status === OK) {
                //If the request succeded, we'll use our callback
                callback (null, JSON.parse(xhttp.responseText)) ; //(1st null, 2nd transforming the text response to JSON object)
            } 
        // instructions in case of error: 
        } else {           
            // instantiate an Error variable, refering to the urlApi called on function.
            const error = new Error ('Error' + urlApi);
            // use callback giving error & null as args.
            return callback(error, null);
        }
    }
    // send the request.
    xhttp. send();
}

/* CALLBACK HELL: Calling fetchData with nested callbacks, to access multiple consecutive resources of our API: products> 1product> its category.
(1st -> we're using `template literals for smooother URL concatenation`,
2nd -> anonymous callback function of anonymous nested functions using the fetchData callback param structure (error,data)) */
fetchData(`${API}/products`, function(error1, data1) {
    //If the initial API calling fails, shut the whole process (return == break),
    if (error1) {return console.log(error1);}
    //otherwise recall fetchData, adding the needed text to the API URL for accessing a specific product.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
        // repeat same logic,
        if (error2) {return console.log(error2);}
        // this time asking for the previously requested product category
        fetchData(`${API}/products/${data2?.category?.id}`, function(error3, data3){
            if (error3) {return console.log(error3);}
            // If everything was found, print the requested objects.
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});