'use strict'

let sliderDelivery = document.querySelector('.slider-delivery');
let guarantee = document.querySelector('.guarantee');
let credit  = document.querySelector('.credit');

let elems = document.querySelectorAll('.slider_2-item');
	for (let i = 0; i < elems.lenght; i += 1) {

	}

let elem1 = document.querySelector('.slider_2-list li:first-child');
let elem2 = document.querySelector('.slider_2-list li:nth-child(2)');
let elem3 = document.querySelector('.slider_2-list li:nth-child(3)');

guarantee.addEventListener('click', () => {
	elem2.classList.add('current-slide');  
  elem1.classList.remove('current-slide');
  elem3.classList.remove('current-slide');

  guarantee.style.backgroundColor='var(--basic-white)';
  guarantee.style.color='var(--dark-grey)';
  sliderDelivery.style.backgroundColor='var(--dark-grey)';
  sliderDelivery.style.color='var(--basic-white)';
  credit.style.backgroundColor='var(--dark-grey)';
  credit.style.color='var(--basic-white)';
});

sliderDelivery.addEventListener('click', () => {
	elem1.classList.add('current-slide');  
  elem2.classList.remove('current-slide');
  elem3.classList.remove('current-slide');

  sliderDelivery.style.backgroundColor='var(--basic-white)';
  sliderDelivery.style.color='var(--dark-grey)';
  guarantee.style.backgroundColor='var(--dark-grey)';
  guarantee.style.color='var(--basic-white)';
  credit.style.backgroundColor='var(--dark-grey)';
  credit.style.color='var(--basic-white)';
});

credit.addEventListener('click', () => {
	elem3.classList.add('current-slide');  
  elem1.classList.remove('current-slide');
  elem2.classList.remove('current-slide');

  credit.style.backgroundColor='var(--basic-white)';
  credit.style.color='var(--dark-grey)';
  guarantee.style.backgroundColor='var(--dark-grey)';
  guarantee.style.color='var(--basic-white)';
  sliderDelivery.style.backgroundColor='var(--dark-grey)';
  sliderDelivery.style.color='var(--basic-white)';
});
