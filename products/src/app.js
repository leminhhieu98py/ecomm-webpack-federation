import faker from 'faker';

const productContainer = document.getElementById('products__main');

const products = [];

for (let i = 0; i < 3; i++) {
  const product = faker.commerce.productName();
  products.push(product);
}

products.forEach((product) => {
  productContainer.insertAdjacentHTML(
    'beforeend',
    `<div style="color:red;">${product}</div>`
  );
});
