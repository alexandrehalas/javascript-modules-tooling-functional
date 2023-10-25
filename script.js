// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);

import { cloneDeep } from 'lodash-es';
import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');
ShoppingCart.addToCart('bread', 5);
ShoppingCart.addToCart('pizza', 3);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// default exports dont need curly braces to import
// import add from './shoppingCart.js';
// add('bread', 5);

// Imports are not copies of Exports, they are a live connection
// and so what that means is that point to the same place in memory

// TOP LEVEL AWAIT ES2022

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// THE MODULE PATTERN

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// COMMONJS MODULES

/*
/ Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

// INTRODUCTION TO NPM

// without parcel
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// with parcel
import { cloneDeep } from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 2 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log('stateClone', stateClone);

// state.user.loggedIn = false;
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log('stateDeepClone', stateDeepClone);

// use this to maintain state for tests with parcel
if (module.hot) {
  module.hot.accept();
}
Promise.resolve('TEST').then(x => console.log(x));
console.log(cart.find(el => el.quantity >= 2));
import 'core-js/stable';
//import 'core-js/stable/array/find';

// Polifilling async functions
import 'regenerator-runtime/runtime';
