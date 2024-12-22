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
    alert('Checked in');
  } else {
    alert('Wrong passport');
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
