import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    //Expressive fetch promise, receiving HTTP POST request.
    const response =  fetch(urlApi, {
        method : 'POST',
        mode: 'cors',
        credentials : 'same-origin',
        headers : {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

// Product to upload
const data = {
    "title": "New Product added succesfully",
    "price": 1078904,
    "description": "A description...",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

// Calling the function (URL to wich to send, the data product variable)
postData(`${API}/products`, data)
// transform the response to json
.then (response =>response.json())
// print the result
.then (data => console.log(data));

// If we enter https://api.escuelajs.co/api/v1/product/[id] we will see that the product has been added to the API
