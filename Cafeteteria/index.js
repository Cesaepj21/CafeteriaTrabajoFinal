const axios = require('axios');

//  Listo Este metod es para tomar Get list of Products

/*function ProductsCollection() {
  // console.log("Products Collection");
  axios.get('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/getProducts')
  .then(response => {
    console.log(response.data);
    // console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  
}
console.log(ProductsCollection());

*/

// listo este metodo que hace crear un nuevo 
//producto "Create Product"
/*
async function CreateNewProduct() {
 //  console.log("Create a New Product");
  const res = await axios({
    method: 'put',
    url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/createProduct',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {  // body es data
      name: "cafe",  
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.JPG',
      price: 300
  }
});
  console.log(res);

}
console.log(CreateNewProduct());

*/

// metodo para actualizar producto 
/*
async function UpdateProduct() {
  //  console.log("Update Product");
   const res = await axios({
     method: 'post',
     url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/updateProduct',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {  // body es data
       name: "Café",  
       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.jpg',
       price: 305,
       id : 'bb6a902d-bbcb-4c80-9db0-389fb759bf4c'
   }
 });
   console.log(res);
 
 }
 console.log(UpdateProduct());

*/

// metodo para eliminar un producto
/*
async function DeleteProduct() {
  console.log("Delete Product");
   const res = await axios({
    method: 'delete',
     url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/deleteProduct',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {  // body es data
       id : 'bb6a902d-bbcb-4c80-9db0-389fb759bf4c'
   }
 });
   console.log(res);
 
 }
 console.log(DeleteProduct())

*/


// metodo para crear un Nuevo Producto
/*
async function CreateNewProduct() {
  console.log("Create New Product");
   const res = await axios({
    method: 'put',
     url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/createOrder',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {  // body es data*
      items :  [    {
       id : '63dc592c-c1b7-4c7c-b85f-7bb64a0e63c5',
       qte : '3',
      }  ],
       User: 'Danny Chaves'
   }
 });
   console.log(res);
 }
 console.log(CreateNewProduct())

*/

/*
function GetListOfOrders() {
  // console.log("Products Collection");
  axios.get('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/getOrders')
  .then(response => {
    console.log(response.data);
    // console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  
}
console.log(GetListOfOrders());


*/



async function UpdateOrderStatus() {
  //  console.log("UpdateOrderStatus");
   const res = await axios({
     method: 'post',
     url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/updateOrder',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {  // body es data
       id : '876da453-204f-40a5-b0b2-936a51a74aec',
       state : 'complete',
   }
 });
   console.log(res);
 }
 console.log(UpdateOrderStatus());









