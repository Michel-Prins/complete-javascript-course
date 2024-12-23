'use strict';

//==========================================================================================
function rentalCarCost(d) {
  //Dit is wel een heel mooi voorbeeld
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}

function rentalCarCost2(d) {
  //Zo heb ik hem gedaan...
  if (d < 3) return d * 40;
  if (7 > d && d >= 3) return d * 40 - 20;
  if (d >= 7) return d * 40 - 50;
}

for (let i = 0; i <= 10; i++) {
  console.log(
    `The cost for ${i} day(s) of car rental is ${rentalCarCost(i)} euro`
  );
  console.log(
    `The cost for ${i} day(s) of car rental is ${rentalCarCost2(i)} euro`
  );
}

//==========================================================================================
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(10, '@'));

//==========================================================================================
function litres(time) {
  // return Math.trunc(time / 2);      // Gevonden online (truncate doet int zoeken dichtste bij 0)
  // return Math.floor(time / 2);      // Als oplossing in CodeWars (floor is dichtste int bij het getal naar beneden)
  return ~~(time / 2); //Dit zou de snelste zijn!
}

console.log(litres(11.9));

//==========================================================================================
function booleanToString(b) {
  // return b === true ? 'true' : 'false';    //Mijn oplossing
  return b.toString(); //Online oplossing
}

console.log(true);

//==========================================================================================
//Dubbele the array value
function maps(x) {
  // const y = [];                         //Mijn oplossing
  // for (let i in x) {
  //     y[i] = x[i] * 2;
  // }
  // return y
  return x.map(n => n * 2); //CodeWars oplossing
}

// In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array

console.log(maps([1, 2, 3]));

//==========================================================================================
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

console.log(zeroFuel(50, 25, 2));

//==========================================================================================
function invert(array) {
  // return array.map(n => n * -1);       //My solution
  return array.map(n => -n); //CodeWars solutions
}

console.log(invert([1, 2, 3, 4, 5]), invert([1, -2, 3, -4, 5]));

//==========================================================================================
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let points = 0;
  for (let i in games) {
    const myArr = games[i].split(':'); //Weet niet of dit de snelste oplossing is!?
    const x = parseInt(myArr[0], 10);
    const y = parseInt(myArr[1], 10);
    points += x > y ? 3 : x === y ? 1 : 0;
  }
  return points;
}
//Je zou nog iets met MAP kunnen doen, en dan per char [0] en [2] de vergelijking kunnen maken...
//Hoe weet je of iets sneller is of niet? Bij Python had je daar een aparte module voor waar je de uitvoeringstijd kon testen.

// function points(games) {                             //CodeWars oplossing
//     let total = 0;
//     games.map(game => {
//       if (game[0] === game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);

//==========================================================================================
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1; //Check op odd or even. === 1 (betekend nog decimals) is odd en === 0 (betekend geen decimals)
}

console.log(lovefunc(0, 1));

//==========================================================================================
function setAlarm(employed, vacation) {
  // return employed === true && vacation === false;     //Mijn eigen oplossing
  return employed && !vacation; //CodeWars oplossing
}

console.log(setAlarm(true, true));

//==========================================================================================
function bmi(weight, height) {
  const bmi = weight / height ** 2;
  if (bmi <= 18.5) return 'Underweight';
  if (bmi <= 25) return 'Normal';
  if (bmi <= 30) return 'Overweight';
  if (bmi > 30) return 'Obese';
}

console.log(bmi(80, 1.8));

//==========================================================================================
function sumMix(x) {
  let sum = 0; //online gebruiken ze de array.reduce method -> Die snap ik (nog) niet.
  x.map(n => (sum += Number(n)));
  return sum;
}

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));

//==========================================================================================
//==========================================================================================
//TODO:  Zoveel mogelijk snippets maken die handig zouden zijn voor mijn gebruik.

// Mijn oplossing...
// const smash = function (words) {
//   let str = '';
//   for (const i of words) {
//     // Door de for lus is dit nu een string en dus moet je concat doen...
//     str = str.concat(' ', i);
//   }
//   return str.trim();
// };

//CodeWars oplossing:
const smash = function (words) {
  //Array kan je dus wel met join aan elkaar knopen....
  return words.join(' ');
};

//Deze oplossing heb ik nog niet gehad qua function gebruik!
// const smash = words => words.join(' ');

const words = ['hello', 'world', 'this', 'is', 'great'];
console.log(smash(words)); // returns "hello world this is great"

//==========================================================================================
//==========================================================================================
// (let rep = 1; rep <= 30; rep++)

//Zelfde als CodeWars :)
const countBy = function (x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
};

console.log(countBy(1, 10));
console.log(countBy(2, 5));

//==========================================================================================
//==========================================================================================

const betterThanAverage = function (classPoints, yourPoints) {
  const tot = classPoints.push(yourPoints);
  let sum = 0;
  for (let num of classPoints) {
    sum += num;
  }
  return yourPoints > sum / tot;
};

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));

//==========================================================================================
//==========================================================================================
const findAverage = function (array) {
  const x = array.length;
  let sum = 0;
  if (x !== 0) {
    for (let i of array) {
      sum += i;
    }
    return sum / x;
  } else return 0;
};

console.log(findAverage([1, 2, 3, 4]));

//==========================================================================================
//==========================================================================================

// Eerste poging
// const hero = function (bullets, dragons) {
//   return bullets / 2 > dragons;
// };

//Zelf gedaan, met enig voorbeeld...
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(100, 40));
console.log(hero(1500, 751));

//==========================================================================================
//==========================================================================================
// const getGrade = function (s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;
//   console.log(score);

// //   switch (score) {
// //     case 0 <= score < 60:
// //       return 'F';
// //     case 0 <= score < 70:
// //       return 'D';
// //     case 70 <= score < 80:
// //       return 'C';
// //     case 80 <= score < 90:
// //       return 'B';
// //     case 90 <= score <= 100:
// //       return 'A';
// //   }
// // };

//   if (90 <= score <= 100) {
//     return 'A';
//   } else if (80 <= score < 90) {
//     return 'B';
//   } else if (70 <= score < 80) {
//     return 'C';
//   } else if (60 <= score < 70) {
//     return 'D';
//   } else if (0 <= score < 60) {
//     return 'F';
//   }
// };

//Waarom werkt deze dan wel?
function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return 'F';
  else if (avg < 70) return 'D';
  else if (avg < 80) return 'C';
  else if (avg < 90) return 'B';
  else return 'A';
}

console.log(getGrade(70, 70, 70));
console.log(getGrade(44, 55, 52));

//==========================================================================================
//==========================================================================================

const getSum = function (a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    sum = a;
    for (let i = a + 1; i <= b; i++) {
      sum += i;
    }
  } else {
    sum = b;
    for (let i = b + 1; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
};

//CodeWars oplossing:
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

console.log(getSum(-1, 2));
console.log(getSum(5, -1));
console.log(getSum(2, 2));
console.log(getSum(0, 1));
