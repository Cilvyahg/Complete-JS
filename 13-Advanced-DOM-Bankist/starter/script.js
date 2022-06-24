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

// const message = document.createElement('div'); // now it's not yet on the page
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics';
// //in innerHtml you can also add elements
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! </button>';

// // prepend adds the element as the first child of the header element
// // header.prepend(message);

// header.append(message); // it will be the last element of the element.

// //clone and element

// // header.append(message.cloneNode(true)); // clone it

// // before and after

// // header.before(message); // this element will be placed before the header element
// // header.after(message); // the message element will be places after the header element

// // delete elements

// document
//   .querySelector('btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove(); // remove method.
//   });

// // Styles -- it will be styled inline and you can find them immediately in the index.

// // message.style.backgroundColor = 'pink';
// // message.style.width = '120%';

// //eventhandlers

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading!');
  h1.removeEventListener('mouseenter', alertH1); // just only need to listening to an event once
};

//when a mouse enters a certain elements

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mousenter', alertH1), 3000); //3 seconds can also do it like this remove a eventlistener by a setTimeOut


