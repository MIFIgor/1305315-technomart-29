'use strict'

const cartPopup = document.querySelector('.modal-cart');
const cartButton = document.querySelector('.show-block .buy');
const cartClose = cartPopup.querySelector('.modal-close');

cartButton.addEventListener('click', (evt) => {
  //cartPopup.style.display='block';
  evt.preventDefault();
  cartPopup.classList.add('modal-show');
});
cartClose.addEventListener('click', (evt) => {
  //cartPopup.style.display='none';
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});
window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (cartPopup.classList.contains('modal-show')) {
      cartPopup.classList.remove('modal-show');
    }
  }
});

console.log(cartPopup);
console.log(cartButton);