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

// TOP LEVEL AWAIT ES2022

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
