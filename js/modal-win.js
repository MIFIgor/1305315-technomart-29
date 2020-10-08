'use strict'

let miniMap = document.querySelector('.mini-map');
let modalMaps = document.querySelector('.modal-maps');
let modalClose1 = document.querySelector('.modal-maps .modal-close');

miniMap.addEventListener('click', () => {
  modalMaps.style.display='block';
});
modalClose1.addEventListener('click', () => {
  modalMaps.style.display='none';
});

 
let modalMessage = document.querySelector('.modal-message');
let aboutButton = document.querySelector('.about-button');
let modalClose2 = document.querySelector('.modal-message .modal-close');

aboutButton.addEventListener('click', () => {
  modalMessage.style.display='block';
});
modalClose2.addEventListener('click', () => {
  modalMessage.style.display='none';
});


