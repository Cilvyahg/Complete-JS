'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '💛 Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); // first empty
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

// first time our code is going to react when we change something in the dom
// eventhandles - we can wait for a certain event to happen and reacts to it.

// click on check button and something should happen

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20; // we start with 20 score because we will decrease the value. const is immutable

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // the function here is the eventhandler
  // document.querySelector('.message').textContent = '💛 Correct number!';
  console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 😪'; // this works no input get a 0 and  0 is a falsey.

    // WHEN PLAYER WINS!
  } else if (guess === number) {
    document.querySelector('.message').textContent = `Yes correct number 💰`;
    document.querySelector('body').style.backgroundColor = '#60b347'; // background turn into green 
    document.querySelector('.number').style.width = '30rem'; //when we adjust a style we need specify a string.

    // GUESS IS TOO HIGH
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high 🙄`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lose the game`;
      document.querySelector('.score').textContent = 0;
    }

    // GUESS IS TOO LOW
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low 😱!`;
      score--; // the score will decrease after a wrong guess
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lose the game`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
