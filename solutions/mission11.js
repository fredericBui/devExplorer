async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

let products = await getProducts();

let fourStars = products.filter(product => product.rating.rate >= 4);

console.log(fourStars);