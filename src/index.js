const { calculateTotalPrice } = require('./calculator');
const { readBasketFromFile } = require('./input');

const basket = readBasketFromFile('panier.txt');
const totalPrice = calculateTotalPrice(basket);

console.log(`Total Price: ${totalPrice} €`);
