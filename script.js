'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'You guessed it right!';
console.log(
  (document.querySelector('.message').textContent = 'You guessed it right!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
*/

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔Please enter a number!';
  } else if (guess === Secretnumber) {
    document.querySelector('.message').textContent = '✅You guessed it right!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = Secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'Game over 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > Secretnumber) {
  //   document.querySelector('.message').textContent = '📈 Too high!';
  //   score--;
  //   if (score < 0) {
  //     document.querySelector('.message').textContent = 'Game over 😢';
  //   } else {
  //     document.querySelector('.score').textContent = score;
  //   }
  // } else if (guess < Secretnumber) {
  //   document.querySelector('.message').textContent = '📉 Too low!';
  //   score--;
  //   if (score < 0) {
  //     document.querySelector('.message').textContent = 'Game over 😢';
  //   } else {
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
