//activate strict mode
'use strict'; //Is veel veiliger en geeft beter de fouten weer. Gerbruik dit altijd

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I Can drive!')

function logger() {
    console.log('Ik ben Michel')
}

logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const fruitJuice = fruitProcessor(2, 4);
console.log(fruitJuice);
console.log(fruitProcessor(4, 9));

//Keep your code DRY (Dont Repeat Yourself)

//OPDRACHT
function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const belgium = describeCountry('Belgium', 11, 'Brussel');
const netherlands = describeCountry('Netherlands', 18, 'Amsterdam');
const germany = describeCountry('Germany', 83, 'Berlin');

console.log(belgium,
    netherlands,
    germany
);

//function declaratios
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
//birthyear = parameter | 1991 = argument -> Kan het een beetje als 1 ding noemen, maar dit is officieel...
const age1 = calcAge1(1991); //Declaratie kan voor het maken van de functie gedaan worden

//function expression
//Sommige gevallen kan het niet anders dan op deze manier...
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1992) //Moet altijd dit stuk na het defineeren.
console.log(age1, age2);

//OPDRACHT -> Function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const chinaPop = percentageOfWorld1(1441);
const netherlandsPop = percentageOfWorld1(18);
const germanyPop = percentageOfWorld1(84);

console.log(chinaPop.toFixed(2), netherlandsPop.toFixed(2), germanyPop.toFixed(2));

//OPDRACHT -> Function Expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const chinaPop2 = percentageOfWorld2(1441);
const netherlandsPop2 = percentageOfWorld2(18);
const germanyPop2 = percentageOfWorld2(84);

console.log(chinaPop2.toFixed(2), netherlandsPop2.toFixed(2), germanyPop2.toFixed(2));


// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


// Review functions...
//function expression
const calcAge_full = function (birthYear) {
    return new Date().getFullYear() - birthYear; //new Date().getFullYear() gives the current year.
}

//function in function
const yearsUntilRetirement_full = function (birthYear, firstName) {
    const age = calcAge_full(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;  //standaard nummer in programming? Betekend dat het geen meaning heeft.
    }
}

console.log(yearsUntilRetirement_full(1987, 'Michel'));

//opdracht
const describePopulation = function (country, population) {
    const popPercentageWorld = percentageOfWorld1(population).toFixed(1);
    console.log(`${country} has ${population} people, wich is about ${popPercentageWorld} of the world.`);
}

describePopulation('Netherlands', 18);
describePopulation('Germany', 84);
describePopulation('China', 1441);

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins / 2 > avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas / 2 > avgDolphins) {
        console.log(`Koalos win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`No team wins...`);
    }
}

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins2, scoreKoalas2);