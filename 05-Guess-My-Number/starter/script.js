'use strict';

//DOM is geen onderdeel van JavaScript
//DOM is lid van de WEG APIs (van de browers) onderdeel van libraries
//Can interat with JS. Zijn ook andere methods dan DOM die dit hebben

//DOM Method
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `🎉 Correct Number!`;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess').value);
*/
const randomNumber = function () {
  //Random number between 1 and 20
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = randomNumber();
let score = 20;
let highscore = 0;
// console.log(secretNumber);

//The again button event handler
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //   secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = randomNumber();
  //   document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});

//addEventListener -> Luisteren naar een event en daar actie op nemen
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `⛔ No number entered`;
    displayMessage(`⛔ No number entered`);
    //When players wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `🎉 Correct Number!`;
    displayMessage(`🎉 Correct Number!`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `📈 To high!` : `📉 To low!`;
      score--;
      displayMessage(guess > secretNumber ? `📈 To high!` : `📉 To low!`);
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      //   document.querySelector(
      //     '.message'
      //   ).textContent = `🧨 You have lost the game!`;
      displayMessage(`🧨 You have lost the game!`);
    }
  }
});

//     //When guess is to high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = `📈 To high!`;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector(
//         '.message'
//       ).textContent = `🧨 You have lost the game!`;
//     }

//     //When guess is to low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = `📉 To low!`;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector(
//         '.message'
//       ).textContent = `🧨 You have lost the game!`;
//     }
//   }
// });
//als 2e argument hebben we de functie ingevuld wat dus ook waarde terug geeft en gebruikt wordt in de addEventListener.
//Dus eigenlijk wat er moet gebeuren na een event...
