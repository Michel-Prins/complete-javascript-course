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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

//addEventListener -> Luisteren naar een event en daar actie op nemen
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number entered`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct Number!`;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 To high!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector(
        '.message'
      ).textContent = `🧨 You have lost the game!`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 To low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector(
        '.message'
      ).textContent = `🧨 You have lost the game!`;
    }
  }
});
//als 2e argument hebben we de functie ingevuld wat dus ook waarde terug geeft en gebruikt wordt in de addEventListener.
//Dus eigenlijk wat er moet gebeuren na een event...
