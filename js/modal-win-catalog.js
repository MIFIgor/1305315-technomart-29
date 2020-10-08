'use strict'

let modalCart = document.querySelector('.modal-cart');
let buy = document.querySelector('.show-block .buy');
let modalClose3 = document.querySelector('.modal-cart .modal-close');

buy.addEventListener('click', () => {
  modalCart.style.display='block';
});
modalClose3.addEventListener('click', () => {
  modalCart.style.display='none';
});