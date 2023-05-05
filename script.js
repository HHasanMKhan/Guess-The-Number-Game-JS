'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = randomNumber;

// Check button event handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ Enter a number!';
    displayMessage('⛔ Enter a number!');
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    // document.querySelector('.message').textContent = "✅ That's correct!";
    displayMessage("✅ That's correct!");
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score >= document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 2) {
      //   document.querySelector('.message').textContent =
      // guess > randomNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score -= 2;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'Game Over!';
      displayMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //    else if (guess > randomNumber) {
  //     if (score > 2) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score -= 2;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < randomNumber) {
  //     if (score > 2) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score -= 2;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Again button event handler
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber + 'THIS BUTTON WORKS');
  score = 20;
  document.querySelector('.number').textContent = randomNumber;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
