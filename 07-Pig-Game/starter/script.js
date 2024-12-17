'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //. is voor classes... # is voor ID's...
const score1El = document.getElementById('score--1'); //Voor IDs is dit hetzelfde!... Dit zou sneller zijn... maar kan standaard wel queryselector gebruiken
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  score0El.textContent = 0; //Hoe ga je leren welke waardes je allemaal kan gebruiken e.d.
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove(`player--winner`);
  document.querySelector(`.player--1`).classList.remove(`player--winner`);
  score0El.textContent = 0; //Hoe ga je leren welke waardes je allemaal kan gebruiken e.d.
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active'); //Deze functie kijkt of de opgegeven waarde aanwezig is. ja, dan wordt het weg gehaald, nee wordt het toegevoegd...
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if players score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden'); //add the hidden class name
      document
        .querySelector(`.player--${activePlayer}`) //selector moet je de class en dus de . punt gebruiken
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //switch player.
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
