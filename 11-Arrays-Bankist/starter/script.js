'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Best Practice is om een functie te maken hiervoor
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    }: ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
        `;
    //Elk element wordt aan het begin geplaatst. dus de laatste van de array staat vooraan/
    containerMovements.insertAdjacentHTML('afterbegin', html); //'beforeend kan je ook gebruiken, en dan wordt het er steends achter geplaatst'
  });
};
displayMovements(account1.movements);

console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//147
// Arrays are objects...

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice Methods (original arr word niet gewijzigd (not mutable))
console.log(arr.slice(2)); //vanaf 2e tot de rest... Let op tellen bij 0!
console.log(arr.slice(2, 4)); //vanaf 2e TOT de 4e... Let op tellen bij 0!
console.log(arr.slice(-2)); //Laatste 2, -1 is de laatste
console.log(arr.slice(1, -2)); //Vanaf de eerste tot de laatse 2

console.log(arr.slice()); //Zo kun je een nieuwe array maken    //Beide is mogelijk
console.log([...arr]); //Zo hebben we het geleerd als een spreak operator  //Beide is mogelijk

//Splice method (arr wordt wel gewijzigd. (is mutable))
console.log(arr.splice(2));
console.log(arr);

//Reverse method  (is mutable)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //Dit is hetzelfde resultaat als concat...

//Join
console.log(letters.join(' - ')); //Wordt een string...

//148
// NEW at method  - ES6!
const arr3 = [23, 11, 64];
console.log(arr[0]); //Zo zouden we het nu doen...
console.log(arr.at(0)); //Dit is hetzelfde

// Use case bv:
console.log(arr[arr.length - 1]); //Dit zouden we moeten doen als we de lengte niet weten
console.log(arr.slice(-1)[0]); //Dit was de 2e manier...
console.log(arr.at(-1)); //Hier komt dan de snelheid.... Dit is nieuw
//at method werkt ook op strings...

//149
//Dus bij een array gebruik je of... en niet de in statement.. de in zou over alles gaan?
// for (const movement of movements) {    //Dit werkt zou dat je over de waarde ittereert
for (const [i, movement] of movements.entries()) {
  //volgorde is anders dan voor de foreach...
  //Hier heb je nog een teller erbij..
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement} euro`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} euro`); //Math.abs is voor de absolute WaveShaperNode, dus zonder de min (-) teken
  }
}

//Dit is de 'makkelijkere' for each..
//Je kan hier niet een break gebruiken...
console.log(`____For each_____`);
// movements.forEach(function (movement) {    //For each heb je verschillende argumenten die je zo kan opgeven...
movements.forEach(function (movement, index, array) {
  //1e altijd de waarde, 2e altijd de index, 3e altijd complete array. (namen maken niet uit uiteraard!)
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement} euro`);
  } else {
    console.log(
      `Movement ${index + 1}: You withdrew ${Math.abs(movement)} euro`
    ); //Math.abs is voor de absolute WaveShaperNode, dus zonder de min (-) teken
  }
});

//150
//Map
console.log(`_____MAP FOR EACH_____`);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// _ in een function als argument sla je deze over...

//==========================================================================================
//==========================================================================================
//Coding challange 1 (153)

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  //Jonas prefereerd de spread method ...
  // const arrDogs = dogsKate.concat(dogsJulia.slice(1, -2));
  const arrDogs = dogsJulia.slice(1, -2).concat(dogsKate);

  arrDogs.forEach(function (dog, i) {
    // if (dog > 2) {
    //   // >= 3
    //   console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    // } else {
    //   console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    // }

    //Dit vind ik wel de fijne manier.. Zelf zo veranderd...
    console.log(
      dog > 2
        ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`
    );
  });
};

const juliaDogs1 = [3, 5, 2, 12, 7];
const juliaDogs2 = [9, 16, 6, 8, 3];

const kateDogs1 = [4, 1, 15, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];

checkDogs(juliaDogs1, kateDogs1);
checkDogs(juliaDogs2, kateDogs2);

//==========================================================================================
//==========================================================================================
//154 -> Super populaire array methods: MAP, FILTER, REDUCE
// MAP = foreach, maar maakt wel een nieuwe...
// Filter maakt een nieuwe array met de condities die je aangeeft.
// Reduce, maakt er 1 waarde van...

//155
const eurToUsd = 1.1;

// MAP itereert dus ook over elke waarde (ES5 functie)
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

//Arrow function van maken!!!
// Dus na de => moet je lezen als een return!!!
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

console.log(movementsUSDArrow);

//Dit is hetzelfde... Als extra uitleg..
const movementsUSDEfor = [];
for (const mov of movements) {
  movementsUSDEfor.push(mov * eurToUsd);
}

console.log(movementsUSDEfor);

//Map heeft ook toegang tot de index en de complete array zoals de forEach...
// Als je dus maar 1 return hebt, hoef je die niet te schrijven en dus ook niet de {}
// Als je meerdere returns hebt zoals met een IF ELSE, dan wel {} gebruiken!!
const movementsDesc = movements.map(
  (mov, i) =>
    //Mooier maken dmv turnary operator
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )} euro`
);
console.log(movementsDesc);
