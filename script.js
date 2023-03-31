'use strict';

// Event listeners
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let input = document.querySelector('.guess');

input.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    event.preventDefault();
    document.querySelector('.btn.check').click(); // Enter key = check score
    input.value = ''; // Sets input blank on Enter
  }
});

// Reset on tab btn
input.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    document.querySelector('.again').click();
  }
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('😡 No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`😁 Correct! It was ${guess}`);
    displayNumber(secretNumber);

    // Change background colour on winning
    let colors = [
      '#60b347',
      '#8bc34a',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
    ];
    let i = 0;
    let intervalId = setInterval(function () {
      document.querySelector('body').style.backgroundColor = colors[i];
      i = (i + 1) % colors.length;
    }, 30); // Animation speed (ms)

    setTimeout(function () {
      clearInterval(intervalId);
      document.querySelector('body').style.backgroundColor = '#222';
    }, 5000); // Duration (seconds)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // High score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber
          ? `🤡 Wrong! It's higher than ${guess}`
          : `🤡 Wrong! It's lower than ${guess}`
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('👹 You lost the game! Press TAB to play');
      displayScore(0);
    }
  }
});

// When guess is too low

// Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing!');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
