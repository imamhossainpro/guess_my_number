'use strict';
// Select elements
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// Create Function for reuse code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const numberStyle = function (style) {
  document.querySelector('.number').style.width = style;
};
const bodyBackground = function (style) {
  document.querySelector('body').style.background = style;
};
const gameScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When Guess has No Number
  if (!guess) {
    displayMessage('⛔️  No Number');
    // When Guess is Equal to secretNumber
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    bodyBackground('#60b347');
    numberStyle('30rem');
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } // When Guess is Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      gameScore(score);
      score--;
    } else {
      displayMessage('🙊 You lose the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// When Click Again Btn than refresh values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  gameScore(score);
  bodyBackground('#222');
  displayNumber('?');
  numberStyle('15rem');
});
