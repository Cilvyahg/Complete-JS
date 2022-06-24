'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements

const message = document.createElement('div'); // now it's not yet on the page
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
//in innerHtml you can also add elements
message.innertHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! </button>';

// prepend adds the element as the first child of the header element
header.prepend(message); 

// header.append(message); // it will be the last element of the element.

header.append(message.cloneNode(true)); // clone it 

header.before(message); // this element will be placed before the header element
header.after(message); // the message element will be places after the header element


