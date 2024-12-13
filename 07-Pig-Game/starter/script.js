'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0'); //. is voor classes... # is voor ID's...
const score1El = document.getElementById('score--1'); //Voor IDs is dit hetzelfde!... Dit zou sneller zijn... maar kan standaard wel queryselector gebruiken
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0; //Hoe ga je leren welke waardes je allemaal kan gebruiken e.d.
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generate a random nr
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. Display dice
  diceEl.classList.remove('hidden'); //Remove the hidden class name
  diceEl.src = `dice-${dice}.png`;

  //3.Check if 1, true switch player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //TODO: Check for active player first.
  } else {
    // Switch to next player
  }
});
