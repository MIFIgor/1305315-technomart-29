'use strict'


let arrSlider_2 = [];
let sliderDelivery = document.querySelector('.slider-delivery');
arrSlider_2.push(sliderDelivery);
let guarantee = document.querySelector('.guarantee');
arrSlider_2.push(guarantee);
let credit  = document.querySelector('.credit');
arrSlider_2.push(credit);
/*
  for (let elem of arrSlider_2) {
    elem.addEventListener('mouseover', function func() {
      elem.style.backgroundColor='var(--darken-grey)';
    });

    elem.addEventListener('mouseout', function func() {
      elem.style.backgroundColor='var(--dark-grey)';
    });

    if (elem.classList.contains('current-slide') === true) {
      elem.removeEventListener('mouseover', func);
      elem.removeEventListener('mouseout', func);
    }
  }*/
  console.log(arrSlider_2);

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
