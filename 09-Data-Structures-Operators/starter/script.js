'use strict';

// {} => OBJECT !!!
// [] => ARRAY !!!!

// const { start } = require('repl');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizaa: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//spread operator; werkt op alle iterables (arrays, strings, maps, sets NOT objects)
//Alleen plekken waar je iets met een , kan invullen tussen waardes
const newArr = [1, 2, ...arr]; //... (spread) maarkt van de array allemaal losse values
console.log(newArr);
console.log(...newArr); //Nu doet ie alle elementen los...

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join arrays
const menuBoth = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuBoth);

const str = 'Michel';
console.log(...str);

// real world example
// const ingredients = [
//   prompt(`Let\'s make pasta! Ingredient 1?`),
//   prompt(`Let\'s make pasta! Ingredient 2?`),
//   prompt(`Let\'s make pasta! Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//object test
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guru' };
console.log(newRestaurant);

//==========================================================================================
//==========================================================================================

//rest object
const [a1, b1, ...others1] = [1, 2, 3, 4, 5];
console.log(a1, b1, others1);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Working functions
const add = function (...numbers) {
  let sum = 0;
  for (let i in numbers) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(4, 2, 6, 7, 3, 2, 6, 3);

const x1 = [23, 5, 7];
add(...x1);
//==========================================================================================
//==========================================================================================

//dit is 1 object als argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Hoofdstraat 23',
  mainIndex: 2,
  starterIndex: 2,
});

//deconstructing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// variable namen verandere vanuit een object...
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

const { menu = [`fish`] } = restaurant;
console.log(menu);

//mutating variables with objext
let a = 122;
let b = 999;
const obj = { a: 23, b: 7, c: 24 };

//mutating is gewoon veranderen....
// {a, b} = obj; //krijg je een error///
({ a, b } = obj); //Dit werkt wel
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(`Openings hourse are between ${open} - ${close}`);

//==========================================================================================
//==========================================================================================

//desctructering an array
let [first, , second] = restaurant.categories;
console.log(first, second);

// switch maken
const temp = first;
first = second;
second = temp;
console.log(first, second);

//destructuring kan het makkelijker (ten opzichte van hierboven!)
[first, second] = [second, first];
console.log(first, second);

//order function toegevoegd
console.log(restaurant.order(2, 0));

//decunstruct the order
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//nested destructering
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//==========================================================================================
//==========================================================================================

//==========================================================================================
//==========================================================================================

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
//exsercise 1
const [firstBook, secondBook] = books;
console.log(firstBook);

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(`The rating = ${rating} and the ratings count = ${ratingsCount}`);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//excersise 2
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags2 } = books[0];
console.log(tags2);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo(books[7]);

//Excersise 3
const bookAuthor2 = [...books[0].author, ...books[1].author];
console.log(bookAuthor2);

const spellWord = function (str) {
  console.log(...str);
};
spellWord(`Hallo ik ben Michel! Ik ben de beste!!!`);

//Excersise 4
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

// Op deze menier kan de parameter authors onbeperkt aan argumenten aan!

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//==========================================================================================
//==========================================================================================

//==========================================================================================
//==========================================================================================

//Challange 1:
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2 -Rest operator
const [gk, ...otherPlayers] = players1;
console.log(gk, otherPlayers);

//3 -Spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5 -destructering
// const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// console.log(team1, draw, team2);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...playerName) {
  console.log(
    `${playerName} had scored goals. Total goals scored: ${playerName.length}`
  );
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//anders krijg je 1 array waarde, en nu allemaal...
printGoals(...game.scored);

//7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

//==========================================================================================
//==========================================================================================

//Looping over arrays (ES6) - for of loop
for (const item of menuBoth) console.log(item);
//deconstruct the item so you dont have to take 0: and 1 item...
for (const [i, el] of menuBoth.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//==========================================================================================
//==========================================================================================
// String methods !!!!

const airline = `TAP Air Netherlands`;
const plane = `A320`;

console.log(airline.indexOf('N'));

//substring: From 4th character...
console.log(airline.slice(4));
//Stopt TOT index nr 7
console.log(airline.slice(4, 7));
//Een woord uit de string halen...
//Dit geval van index 0 tot aan de eerste spatie
console.log(airline.slice(0, airline.indexOf(' ')));
//Nu het laatste woord vanaf de laatste spatie(maar spatie niet meegerekend, dus +1) tot het eind
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You have got the middle seat`);
  } else console.log(`You are lucky`);
};
checkMiddleSeat('11B');
checkMiddleSeat('22C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'MIchEl';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing Emails
const email = 'hello@michel.io';
const loginemail = '  Hello@Michel.Io \n';

const lowerEmail = loginemail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);

//Kan ook allemaal in 1 stap
const normilizedEmail = loginemail.toLowerCase().trim();
console.log(normilizedEmail);

console.log(email === normilizedEmail);

//replace parts of strings
const priceEur = '288,98€';
const priceUS = priceEur.replace('€', '$').replace(',', '.');

console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replaceAll('door', 'gate'));

//Regular expression
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('A32'));

//practive exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else console.log(`Good flight`);
};

checkBaggage('I have a Laptop, some Foords and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Snacks and a gun for self protection');

console.log('a+very+nice+string'.split('+'));
console.log('Michel Prins'.split(' '));

const [firstName2, lastName2] = 'Michel Prins'.split(' ');

const newName = ['Mr.', firstName2, lastName2.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('michel prins');
capitalizeName('jessica parker smith andrew state');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '-').padEnd(30, '-'));

//Real world example
const maskCreditCard = function (number) {
  const str = number + ''; //String(number) is hetzelfe
  const right4Digits = str.slice(-4);
  console.log(right4Digits.padStart(str.length, '*'));
};
maskCreditCard(46846876484364866);
maskCreditCard(4684687648);

//repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
// MDN string => you can find all methods for strings!!!!
