//Método map()

const products = ["apple", "banana", "orange", "grape", "kiwi"];

products.map((product) => {
  console.log(product);
});


//sintaxe reduzida
products.map((product) => console.log(product));

//utilizando um novo objeto retornado  
const newProducts = products.map((product) => {
  return {
    name: product,
    price: 10,
  };
});
console.log(newProducts);
//outra forma de fazer
const newProducts2 = products.map((product) => ({
  name: product,
  price: 10,
}));
console.log(newProducts2);

// com toUpperCase
const newProducts3 = products.map((product) => ({
  name: product.toUpperCase(),
  price: 10,
}));

// com id e random
const newProducts4 = products.map((product) => ({
  id: Math.random(),
  name: product.toUpperCase(),
  price: 10,
}));


