// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} - ${product} added to cart`);
};

// multiply exports with named export
const totalPrice = 200;
const totalQuantity = 20;

export { totalPrice, totalQuantity as tq };

// We use exports default, when we want export one thing per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} - ${product} added to cart`);
}
