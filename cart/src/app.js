import faker from 'faker';

const cartContainer = document.getElementById('cart__main');

const carts = [];

for (let i = 0; i < 3; i++) {
  const cart = faker.commerce.product();
  carts.push(cart);
}

carts.forEach((cart) => {
  cartContainer.insertAdjacentHTML('beforeend', `<div>${cart}</div>`);
});
