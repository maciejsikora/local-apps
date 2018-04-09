import { getAllProducts } from './list';
let cartProducts = [];
let cartListDOM;
let cartDOM;
let cartPrice = 0;
let cartPriceDOM;

export const buy = (productId) => {
  const product = getAllProducts().find((product) => {
    return product.id.toString() === productId;
  });

  addToCart(product);
  renderCartList();
  renderPrice();
}

const isInCart = (productId) => {
  return Boolean(findInCart(productId));
}

const findInCart = (productId) => {
  return cartProducts.find((pr) => {
    return pr.id === productId;
  });
}

const addToCart = (product) => {
  if (isInCart(product.id)) {
    findInCart(product.id).count++;
  } else {
    cartProducts.push({...product, count: 1});
  }
}

const removeFromCart = (productId) => {
  cartProducts = cartProducts.map((product) => {
    if (product.id === productId) {
      product.count--;
    }
    return product;
  }).filter((product) => {
    return product.count > 0;
  });
}

const calculatePrice = () => {
  return cartProducts.reduce((price, product) => {
    return price+=product.price*product.count;
  }, 0)
}

const renderPrice = () => {
  cartPriceDOM.innerText = calculatePrice().toFixed(2);
}

const createCartListHTML = () => {
  return cartProducts.reduce((html, product) => {
    return html + `<tr>
    <td>${product.name}</td>
    <td>${product.count}</td>
    <td><a data-id="${product.id}" class="remove-cart-item">
    <i class="fas fa-minus-square"></i></a></td>
    </tr>`;
  }, '');
}

const bindCartList = () => {
  cartDOM.querySelectorAll('a.remove-cart-item').forEach((a) => {
    a.addEventListener('click', (event) => {
      removeFromCart(parseInt(a.dataset.id));
      renderCartList();
      renderPrice();
    })
  });
}

const clearCart = () => {
  cartProducts = [];
  renderCartList();
  renderPrice();
}

const bindClearCart = () => {
  cartDOM.querySelector('#clear-cart').addEventListener('click', clearCart);
}

const renderCartList = () => {
  cartListDOM.innerHTML = createCartListHTML();
  bindCartList();
}


export const initCart = () => {
  cartListDOM = document.querySelector('#cart table > tbody');
  cartDOM = document.querySelector('#cart');
  cartPriceDOM = cartDOM.querySelector('#cart-price strong');
  renderCartList();
  renderPrice();
  bindClearCart();
}