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