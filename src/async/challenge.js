import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//async function that uses fetch promise, receiving an url
async function fetchData(urlApi) {
    // fetch and wait
    const response = await fetch(urlApi);
    // transform to json and wait
    const data = await response.json();
    // return JSON
    return data;
}

// async arrow function that holds a try catch
const anotherFunction = async (urlApi) => {
    try {
        //fetch the url for all the products and wait
        const products = await fetchData(`${urlApi}/products`);
        //fetch the url for the first product and wait
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //fetch the url for the category of the first product and wait
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //print all the products
        console.log(products);
        //print the name of the first product
        console.log(product.title);
        //print the name of the category
        console.log(category.name);


    } catch (error) {
        //print the error if there is one
        console.log(error);
    }
}