// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing module');
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// default exports dont need curly braces to import
import add from './shoppingCart.js';
add('bread', 5);

// Imports are not copies of Exports, they are a live connection
// and so what that means is that point to the same place in memory
