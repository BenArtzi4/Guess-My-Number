'use strict';

// Generate random number between 1 and 100
let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 100;

let highestScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // get the user input
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number entered');
  }

  // the player wins
  else if (guess === secretNumber) {
    displayMessage('🍾You guessed the right number\ncongratulations');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // check if need to update highest score
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.label-highscore').textContent =
        '🥇 Highscore: ' + highestScore;
    }
  } else if (guess > secretNumber) {
    displayMessage('📈Too high');
    wrongGuess();
  } else {
    displayMessage('📉Too low');
    wrongGuess();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  score = 100;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

// change message text
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function wrongGuess() {
  // The player lost
  if (score === 0) {
    displayMessage('😿You lost');
  }
  score--;
  document.querySelector('.score').textContent = score;
}
