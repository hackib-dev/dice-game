'use strict';

const players = document.querySelectorAll('.player');
const scores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceFace = document.querySelector('.dice');

let currentPlayer = 0;
let playersScore = [0, 0];
let currentScore = 0;
const face = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const switchPlayer = function () {
  currentScore = 0;
  currentScores[currentPlayer].textContent = currentScore;
  players[currentPlayer].classList.remove('player--active');
  currentPlayer = 1 - currentPlayer;
  players[currentPlayer].classList.add('player--active');
};

const rollDice = function () {
  diceFace.style.display = 'block';
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceFace.src = face[diceNumber - 1];
  if (diceNumber === 1) {
    switchPlayer();
  } else {
    currentScore += diceNumber;
    currentScores[currentPlayer].textContent = currentScore;
  }
};

const holdGame = function () {
  playersScore[currentPlayer] += currentScore;
  scores[currentPlayer].textContent = playersScore[currentPlayer];

  if (playersScore[currentPlayer] >= 100) {
    players[currentPlayer].style.backgroundColor = '#2f2f2f';
    document.querySelector(`#name--${currentPlayer}`).style.color = '#c7365f';
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  } else {
    switchPlayer();
  }
};

const newGame = function () {
  for (let i = 0; i < scores.length; i++) {
    currentScore = 0;
    playersScore[i] = 0;
    currentScores[i].textContent = 0;
    scores[i].textContent = 0;
    players[i].classList.remove('player--active');
    players[i].style.backgroundColor = '';
    document.querySelector(`#name--${i}`).style.color = '';
  }

  currentPlayer = 0;
  players[currentPlayer].classList.add('player--active');
  diceFace.style.display = 'none';
  rollBtn.disabled = false;
  holdBtn.disabled = false;
};

rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdGame);
newGameBtn.addEventListener('click', newGame);
newGame();
