'use strict'

let elems = document.querySelectorAll('.catalog-item');
let showBlock = document.querySelector('.show-block');

for (let elem of elems) {
  elem.addEventListener('mouseover', () => {
    elem.appendChild(showBlock);
    elem.style.boxShadow='0px 4px 10px var(--dark-shadow);'
    showBlock.style.position='absolute';
    showBlock.style.left='0';
    showBlock.style.top='0';
    showBlock.style.cursor='pointer'
    showBlock.style.zIndex='2';
    showBlock.style.display='block';
  });

  elem.addEventListener('mouseout', () => {
    showBlock.style.display='none';
  });
}

console.log(elems);
console.log(showBlock);