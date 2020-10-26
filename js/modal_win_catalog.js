'use strict'

const cartPopup = document.querySelector('.modal-cart');
const cartButtons = document.querySelectorAll('.buy');
const cartClose = cartPopup.querySelector('.modal-close');

for (let cartButton of cartButtons) {

  cartButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
  });
  cartClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove('modal-show');
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (cartPopup.classList.contains('modal-show')) {
        cartPopup.classList.remove('modal-show');
      }
    }
  });
}