async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

let products = await getProducts();

let cheapestPrice = products[0].price;
let cheapestProduct = products[0];

products.forEach(element => {
    if (element.price < cheapestPrice) {
        cheapestPrice = element.price;
        cheapestProduct = element;
    }
});

console.log(`Le produit le moins cher est : ${cheapestProduct.title}`);