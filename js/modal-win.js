'use strict'

//-----------Modal-maps-------->

const mapButton = document.querySelector('.mini-map');
const mapPopup = document.querySelector('.modal-maps');
const mapClose = mapPopup.querySelector('.modal-close');

mapButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
  //mapPopup.style.display='block';
});
mapClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  //messagePopup.style.display='none';
  mapPopup.classList.remove('modal-show');  
});
window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if ( mapPopup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
    }
  }
});


//----------Modal-message---------->
 
const messagePopup = document.querySelector('.modal-message');
const messageButton = document.querySelector('.about-button');
const messageClose = messagePopup.querySelector('.modal-close');
const messageForm = messagePopup.querySelector('.form-message')
const messageName = messagePopup.querySelector('.name');
const messageEmail = messagePopup.querySelector('.email');

messageButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  //messagePopup.style.display='block';
  messagePopup.classList.add('modal-show');  
  messageName.focus();
});

messageClose.addEventListener('click', function (evt) {
  evt.preventDefault();
   //messagePopup.style.display='none';
  messagePopup.classList.remove('modal-show'); 
  messagePopup.classList.remove('modal-error');
});

messageForm.addEventListener('submit', function (evt) {
  if (!messageName.value || !messageEmail.value) {
    evt.preventDefault();
    messagePopup.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (messagePopup.classList.contains('modal-show')) {
      //messagePopup.style.display='none';
      messagePopup.classList.remove('modal-show');
      messagePopup.classList.remove('modal-error');
    }    
  }
});

/*
//----------Modal cart----->

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
});*/


//---------Show block------------->

const elems = document.querySelectorAll('.catalog-item');
const showBlock = document.querySelector('.show-block');

for (let elem of elems) {
  elem.addEventListener('mouseover', () => {
    elem.appendChild(showBlock);
    elem.style.boxShadow='0px 4px 10px var(--dark-shadow);'
    showBlock.style.position='absolute';
    showBlock.style.left='0';
    showBlock.style.top='0';
    showBlock.style.cursor='pointer'
    showBlock.style.zIndex='2';
    showBlock.classList.remove('visually-hidden');
  });

  elem.addEventListener('mouseout', () => {
    showBlock.classList.add('visually-hidden');
  });
}

/*
//-----------Slider_1---------------->


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
});*/


