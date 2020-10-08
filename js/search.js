'use strict'

let search = document.querySelector('.search');
let input = document.querySelector('.input');
let searching = document.querySelector('.searching path');

search.addEventListener('focus', () => {
  searching.backgroundColor='var(--basic-red)';

});