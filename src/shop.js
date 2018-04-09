import { initList } from './shop/list';
import { buy, initCart } from './shop/cart';
console.log('I am shop.js!');


document.addEventListener("DOMContentLoaded", (event) => {
  initCart();
  initList(buy);
});