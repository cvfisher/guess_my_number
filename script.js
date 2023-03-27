'use strict';

// Select and manipulate elements
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Event listeners
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😡 No number!';
  } else if (guess == secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `😁 Correct! It was ${guess}`;
  } else if (guess > secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `🤡 Wrong! It's lower than ${guess}`;
    score--;
    document.querySelector('.score').textContent = score;
  } else
    document.querySelector(
      '.message'
    ).textContent = `🤡 Wrong! It's higher than ${guess}`;
  score--;
  document.querySelector('.score').textContent = score;
});
