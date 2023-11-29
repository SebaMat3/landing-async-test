import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//Declaring a function
function fetchData(urlApi){
    //That uses our imported fetch object as return
    return fetch(urlApi);
}

/*
fetchData(`${API}/products`) 
    //Transpiling the resource to JSON, grants object manipulation to it.
    .then (response => response.json())
    .then (products => {
        console.log(products);
    })
    //We can add as much callbacks as we want...
    .then (()=>{
        console.log('It worked!');
    })
    // Dont forget to implement .catch, to provide proper information in case of error
    .catch (error => console.log(error));
     */

/* We can call this function and nest requests using .then (callback hell) right from the go.
lets give it a try with our previous nested API requests challenge */
fetchData(`${API}/products`)
    //Transpiling the resource to JSON, grants object manipulation to it.
    .then(response => response.json())
    //We can add as much callbacks as we want...
    .then(products =>{
        console.log(products);
        return fetchData (`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product =>{
        console.log(product.title)
        return fetchData (`${API}/categories${product.category.id}`)
    })
    .then(response => response.json())
    .then (category => {
         console.log(category.name);
    })
    // Dont forget to implement .catch, to provide proper information in case of error
    .catch(err => console.log(err))
    .finally(() => console.log('Great, thats it.'));

