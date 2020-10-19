'use strict'

let sliderDelivery = document.querySelector('.slider-delivery');
let guarantee = document.querySelector('.guarantee');
let credit  = document.querySelector('.credit');

const currentButton = function () {
  let buttons = document.querySelectorAll('.slider_2 button');
    for (let button of buttons) {
      if (button.classList.contains('current-button')) {
        button.style.backgroundColor='var(--basic-white)';
        button.style.color='var(--dark-grey)';
      }
      if (!button.classList.contains('current-button')) {
        button.style.backgroundColor='var(--dark-grey)';
        button.style.color='var(--basic-white)';
      }

      button.addEventListener('mouseover', function (evt) {
        evt.preventDefault();
        if (!button.classList.contains('current-button')) {
          button.style.backgroundColor='var(--darken-grey)';
          }
      });
      button.addEventListener('mouseout', function (evt) {
        evt.preventDefault();
        if (!button.classList.contains('current-button')) {
          button.style.backgroundColor='var(--dark-grey)';
          }
      });      
      button.addEventListener('focus', function (evt) {
        evt.preventDefault();
        if (button.classList.contains('current-button')) {
          button.style.boxShadow='0px 4px 20px var(--dark-shadow)';
        }
        if (!button.classList.contains('current-button')) {
          button.style.backgroundColor='var(--darken-grey)';
        }
      });
      button.addEventListener('blur', function (evt) {
        evt.preventDefault();
        if (button.classList.contains('current-button')) {
          button.style.boxShadow='none';
        }
        if (!button.classList.contains('current-button')) {
          button.style.backgroundColor='var(--dark-grey)';
        }
      });
    }
};


let elem1 = document.querySelector('.slider_2-list li:first-child');
let elem2 = document.querySelector('.slider_2-list li:nth-child(2)');
let elem3 = document.querySelector('.slider_2-list li:nth-child(3)');

guarantee.addEventListener('click', (evt) => {
  evt.preventDefault();
	elem2.classList.add('current-slide');  
  elem1.classList.remove('current-slide');
  elem3.classList.remove('current-slide');

  guarantee.classList.add('current-button');
  sliderDelivery.classList.remove('current-button');
  credit.classList.remove('current-button');

  currentButton();
});

sliderDelivery.addEventListener('click', (evt) => {
  evt.preventDefault();
	elem1.classList.add('current-slide');  
  elem2.classList.remove('current-slide');
  elem3.classList.remove('current-slide');
  
  sliderDelivery.classList.add('current-button');
  guarantee.classList.remove('current-button');
  credit.classList.remove('current-button');

  currentButton();
});

credit.addEventListener('click', (evt) => {
  evt.preventDefault();
	elem3.classList.add('current-slide');  
  elem1.classList.remove('current-slide');
  elem2.classList.remove('current-slide');

  credit.classList.add('current-button');
  guarantee.classList.remove('current-button');
  sliderDelivery.classList.remove('current-button');

  currentButton();
});