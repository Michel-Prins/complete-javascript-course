'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;       //ES 5 way for default
  //   price = price || 199;                     //ES 5 way for default

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);

//134
const flight = 'LH987';
const michel = {
  name: 'Michel Prins',
  passport: 13435468658,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 13435468658) {
    // alert('Checked in');
  } else {
    // alert('Wrong passport');
  }
};

// We zien dus dat de michel object de naam wel wordt aangepast door de functie!!!!
// Komt omdat er een referentie is meegegeven, door de memory heap.
checkIn(flight, michel);
console.log(flight);
console.log(michel);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(michel);
checkIn(flight, michel);

//==========================================================================================
//==========================================================================================

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

//Bij DOM met addEventListener hadden we dit ook al gebruikt als transformer function (high-order function)

//==========================================================================================
//==========================================================================================
// 137

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Omdat greeterHey een functie aanroept, dat een functie returns, dan kan je dit weer als functio gebruiken
const greeterHey = greet('Hey');

greeterHey('Michel');
greeterHey('Tess');

//Kan dus weer de 1ste functie ook gelijk aanroepen met 2 waardes...
greet('Hello')('Michel');

//Challenge arrow function (fail... niet gehad...)
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Tijn');

//==========================================================================================
//==========================================================================================
//139
