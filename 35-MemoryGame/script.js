'use strict';

//Deze variablen 'vullen' door het element, maar ook veranderen via deze...
const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;
let firstCardValue;

//Items array with objects
const items = [
  { name: 'bee', image: 'bee.png' },
  { name: 'crocodile', image: 'crocodile.png' },
  { name: 'macaw', image: 'macaw.png' },
  { name: 'gorilla', image: 'gorilla.png' },
  { name: 'tiger', image: 'tiger.png' },
  { name: 'monkey', image: 'monkey.png' },
  { name: 'chameleon', image: 'chameleon.png' },
  { name: 'piranha', image: 'piranha.png' },
  { name: 'anaconda', image: 'anaconda.png' },
  { name: 'sloth', image: 'sloth.png' },
  { name: 'cockatoo', image: 'cockatoo.png' },
  { name: 'toucan', image: 'toucan.png' },
];

//initial time
let seconds = 0,
  minutes = 0;

//initial moves en win count
let movesCount = 0,
  winCount = 0;

//for timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};
//For calculation moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//pick random objects from the items array
const generateRandom = (size = 4) => {
  //temp array --> ahh een temp array om gebruikte objecten te verwijderen...
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //size should be double (4x4 matrix)/2 since pairs of objects...
  size = (size * size) / 2;
  //random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the object from the temp array... (en nu maak je ze uniek!)
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = '';
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
    Create cards
    before => front side (contains question mark)
    after => back side (contains actual image)
    data-card-values is a custom atrribute eich store te names of the cards to match later.
     */
    gameContainer.innerHTML += `
    <div class='card-container' data-card-value='${cardValues[i].name}'>
        <div class='card-before'>?</div>
        <div class='card-after'>
        <img src='images//${cardValues[i].image}' class='image'/></div>
    </div>
    `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

  //cards
  cards = document.querySelectorAll('.card-container');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored)
      //   if (!card.classList.contains('matched')) {
      if (
        !card.classList.contains('matched') &&
        !card.classList.contains('flipped')
      ) {
        //Flip the clicked card
        card.classList.add('flipped');
        //If it is the firstcard(!firstCard since firstcard is initially false)
        if (!firstCard) {
          //so current card will become firstCard
          firstCard = card;
          //current cards value becomes firstCardValue
          firstCardValue = card.getAttribute('data-card-value');
          //   console.log(`${typeof firstCardValue}: ${firstCardValue}`);
        } else {
          //increment moves since user selected second card
          movesCounter();
          //second card and value
          secondCard = card;
          let secondCardValue = card.getAttribute('data-card-value');
          //   console.log(`${typeof secondCardValue}: ${secondCardValue}`);
          if (firstCardValue == secondCardValue) {
            //if botch cards mach add matched class so these cards would be ignored next time
            firstCard.classList.add('matches');
            secondCard.classList.add('matches');
            //set firstCard to false since next card would be first card again...
            firstCard = false;
            //wincount increment as user found a correct match
            winCount += 1;
            //check if winCount == half of cardValues
            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>You Won</h2> <h4>Moves: ${movesCount}</h4>`;
              stopGame();
            }
          } else {
            //if the cards dont match
            //flipt the cards
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove('flipped');
              tempSecond.classList.remove('flipped');
            }, 900);
          }
        }
      }
    });
  });
};

//Start game
startButton.addEventListener('click', () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  //controls and buttons visible
  controls.classList.add('hide');
  stopButton.classList.remove('hide');
  startButton.classList.add('hide');
  //start timer
  interval = setInterval(timeGenerator, 1000);
  //initial moves
  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  initializer();
});

//stop game
//Define the stopGame function
const stopGame = () => {
  controls.classList.remove('hide');
  stopButton.classList.add('hide');
  startButton.classList.remove('hide');
  // clear inteval is een standaard functie
  clearInterval(interval);
};
stopButton.addEventListener('click', stopGame);

//initializevalues and func calls
const initializer = () => {
  result.innerText = '';
  winCount = 0;
  let cardValues = generateRandom();
  //   console.log(cardValues);
  matrixGenerator(cardValues);
};

// console.log(items);
// console.log(items.length);
// console.log(items[7]);
// console.log(...items);
// console.log([...items]);
// console.log([...items][7]);
// console.log([...items].length);
// console.log(generateRandom());
