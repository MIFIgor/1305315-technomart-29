'use strict'

const slider_1 =  document.querySelector('.slider_1');

const iconLeft = slider_1.querySelector('.icon-left');
const iconRight = slider_1.querySelector('.icon-right');

const btn1 = slider_1.querySelector('.btn-1');
const btn2 = slider_1.querySelector('.btn-2');
      
iconLeft.addEventListener('click', () => {
  slider_1.classList.add('slider_1-current-1');
	slider_1.classList.remove('slider_1-current-2');
	btn1.classList.add('current');
	btn2.classList.remove('current');
});

iconRight.addEventListener('click', () => {
  slider_1.classList.add('slider_1-current-2');
	slider_1.classList.remove('slider_1-current-1');
	btn2.classList.add('current');
	btn1.classList.remove('current');
});

btn1.addEventListener('click',  () => {
	slider_1.classList.add('slider_1-current-1');
	slider_1.classList.remove('slider_1-current-2');
	btn1.classList.add('current');
	btn2.classList.remove('current');
});

btn2.addEventListener('click',  () => {
	slider_1.classList.add('slider_1-current-2');
	slider_1.classList.remove('slider_1-current-1');
	btn2.classList.add('current');
	btn1.classList.remove('current');
});
      
      