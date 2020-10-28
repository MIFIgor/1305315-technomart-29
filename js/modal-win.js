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

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

messageButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  messagePopup.classList.add('modal-show');
  
  if (storage) {
    messagName.value = storage;
    messageEmail.focus();
  } else {
  messageName.focus();
  }
});

messageClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove('modal-show'); 
  messagePopup.classList.remove('modal-error');
});

messageForm.addEventListener('submit', function (evt) {
  if (!messageName.value || !messageEmail.value) {
    evt.preventDefault();
    messagePopup.classList.remove('modal-error');
    messagePopup.offsetWidth;
    messagePopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', messageName.value) && localStorage.setItem('email', messageEmail.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (messagePopup.classList.contains('modal-show')) {
      evt.preventDefault();
      messagePopup.classList.remove('modal-show');
      messagePopup.classList.remove('modal-error');
    }    
  }
});

/*
//----------Modal cart----->

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
*/



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
});


//-------------Slider_2------------->


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
        button.style.boxShadow='0px 1px 0px var(--darken-grey), inset 0px 1px 0px var(--inset-shadow)';
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
  guarantee.style.boxShadow='0px 1px 0px var(--basic-white)';
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


