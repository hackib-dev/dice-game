// 'use strict';
// const activePlayer = document.querySelector('.player--active');
// const playerOne = document.querySelector('.player--0');
// const playerTwo = document.querySelector('.player--1');
// const scoreOne = document.querySelector('#score--0');
// const scoreTwo = document.querySelector('#score--1');
// const currentScoreOne = document.querySelector('#current--0');
// const currentScoreTwo = document.querySelector('#current--1');

// let diceFace = document.querySelector('.dice');

// diceFace.style.display = 'none';

// const face = [
//   'dice-1.png',
//   'dice-2.png',
//   'dice-3.png',
//   'dice-4.png',
//   'dice-5.png',
//   'dice-6.png',
// ];
// let curScoreOne = 0;
// let curScoreTwo = 0;
// let playerScoreOne = (scoreOne.textContent = 0);
// let playerScoreTwo = (scoreTwo.textContent = 0);

// const rollDice = function () {
//   let diceNumber = Math.trunc(Math.random() * 6 + 1);
//   diceFace.style.display = 'block';

//   if (playerOne.classList.contains('player--active')) {
//     if (diceNumber === 1) {
//       playerOne.classList.remove('player--active');
//       playerTwo.classList.add('player--active');
//       curScoreOne -= currentScoreOne.textContent;
//       currentScoreOne.textContent = curScoreOne;
//     }
//     if (diceNumber !== 1) {
//       curScoreOne += diceNumber;
//       currentScoreOne.textContent = curScoreOne;
//     }
//   } else {
//     if (diceNumber === 1) {
//       playerTwo.classList.remove('player--active');
//       playerOne.classList.add('player--active');
//       curScoreTwo -= currentScoreTwo.textContent;
//       currentScoreTwo.textContent = curScoreTwo;
//     }
//     if (diceNumber !== 1) {
//       curScoreTwo += diceNumber;
//       currentScoreTwo.textContent = curScoreTwo;
//     }
//   }

//   diceFace.setAttribute('src', face[diceNumber - 1]);
// };

// const holdGame = function () {
//   if (playerOne.classList.contains('player--active')) {
//     playerOne.classList.remove('player--active');
//     playerTwo.classList.add('player--active');
//     playerScoreOne += curScoreOne;
//     scoreOne.textContent = playerScoreOne;
//     curScoreOne -= currentScoreOne.textContent;
//     currentScoreOne.textContent = curScoreOne;
//     if (playerScoreOne >= 10) {
//       playerOne.style.backgroundColor = '#2f2f2f';
//       document.querySelector('#name--0').style.color = '#c7365f';

//       document.querySelector('.btn--roll').disabled = true;
//       document.querySelector('.btn--hold').disabled = true;
//     }
//   } else {
//     playerTwo.classList.remove('player--active');
//     playerOne.classList.add('player--active');
//     playerScoreTwo += curScoreTwo;
//     scoreTwo.textContent = playerScoreTwo;
//     curScoreTwo -= currentScoreTwo.textContent;
//     currentScoreTwo.textContent = curScoreTwo;
//     if (playerScoreTwo >= 10) {
//       playerTwo.style.backgroundColor = '#2f2f2f';
//       document.querySelector('#name--1').style.color = '#c7365f';
//       document.querySelector('.btn--roll').disabled = true;
//       document.querySelector('.btn--hold').disabled = true;
//     }
//   }
// };

// const newGame = function () {
//   scoreTwo.textContent = 0;
//   scoreOne.textContent = 0;
//   currentScoreOne.textContent = 0;
//   currentScoreTwo.textContent = 0;
//   playerScoreOne = 0;
//   playerScoreTwo = 0;
//   document.querySelector('.btn--roll').disabled = false;
//   document.querySelector('.btn--hold').disabled = false;
//   playerOne.style.backgroundColor = '';
//   playerTwo.style.backgroundColor = '';
//   document.querySelector('#name--0').style.color = '';
//   document.querySelector('#name--1').style.color = '';
//   playerTwo.classList.remove('player--active');
//   playerOne.classList.add('player--active');
//   diceFace.style.display = 'none';
// };

// document.querySelector('.btn--roll').addEventListener('click', rollDice);
// document.querySelector('.btn--hold').addEventListener('click', holdGame);
// document.querySelector('.btn--new').addEventListener('click', newGame);
