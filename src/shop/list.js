import products from './products';
let domElement;

const createListHTML = () => {
  return getAllProducts().reduce((html, product) => {
    return html + `<div class="box product">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="${product.img}" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${product.name}</strong> for only <b>${product.price}</b>
              <br/>
              ${product.description}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" class="product-button-buy" data-id="${product.id}">
                <span class="icon is-small"><i class="fas fa-shopping-cart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>`
  }, '');
}

const renderList = () => {
  domElement.innerHTML = createListHTML(products);
}

const bindList = (callback) => {
  domElement.querySelectorAll('a[data-id]').forEach((a) => {
    a.addEventListener('click', (event) => {
      callback(event.currentTarget.dataset.id);
    })
  })
}

export const initList = (buyCallback) => {
  domElement = document.querySelector('#products');
  renderList();
  bindList(buyCallback);
}

export const getAllProducts = () => {
  return products;
}
