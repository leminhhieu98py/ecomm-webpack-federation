import faker from 'faker';

const mainContainer = document.getElementById('cart__main');

const products = [];

for (let i = 0; i < 3; i++) {
  const product = faker.commerce.product();
  products.push(product);
}

products.forEach((product) => {
  mainContainer.insertAdjacentHTML('afterend', `<div>${product}</div>`);
});
