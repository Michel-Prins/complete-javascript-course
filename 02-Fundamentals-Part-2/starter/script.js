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


//arrays! --------------------------------------------------------------------------------------------------------------
//Huidige manier zoals we geleerd hebben, zouden we het zo doen!
// const friend1 = 'Jeroen';
// const friend2 = 'Sietse';
// const friend3 = 'Peter';

const friends = ['Sietse', 'Jeroen', 'Peter']; //Dit is meer gebruikelijker om een array aan te maken... Deze is wel mutable.
console.log(friends);

//Dit is hetzelfde om een array aan te maken.
// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);  //Tellen begint bij 0 uiteraard!
console.log(friends.length);    //Dit is een property
console.log(friends[friends.length - 1]);       //[] hiertussen is een expressie en geen statement ; dit geeft laatste waarde weer.

friends[2] = 'Henk';        //Dit heet mutaten (mutable)
console.log(friends);

//een array kan verschillinde data types bevatten; kan zelfs andere variablen erin zetten, of andere arrays...
const firstName = 'Michel';
const michel = [firstName, 'Prins', 2037 - 1987, 'OT-Engineer', friends]; //Inhoud is een expressie.
console.log(michel);

//Excersise (with calcAge2 function)
const years = [1990, 1967, 2022, 2010, 2018];
//Array via een functie laten gaan:
console.log(calcAge2(years));
const yearsToAge = [];

for (let i in years) {
    yearsToAge.push(calcAge2(years[i]));
}
console.log(yearsToAge);
//Add after
friends.push('Pieter');     //Push is een Method om de array te extenden. ; geeft een return value van de lenght van de array terug...
console.log(friends);
//Add before
friends.unshift('John');
console.log(friends);       //add a value in het begin. ; geeft ook de lenght terug.
//remove element
friends.pop();              //last ; returns the removed element...
console.log(friends);
//remove first element
friends.shift();            //remove first element ; returns the removed element.
console.log(friends);

console.log(friends.indexOf('Jeroen'));     //Geeft de index terug van de waarde.
//Zelfde als voor ES6
console.log(friends.includes('Jeroen'));    //Verteld alleen als het aanwezig of niet. (true/false) ; Doet geen type cohersion. (dus tussen string en int)

console.log(friends.includes('Henk'));

// CHALLENGE #2 ----------------------------------------------------------------------------------------------------
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2     //Zelfde als de If Else fucntion
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //Denk dat hij het zo wil zien qua challange.
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//maar nu met de kennis die ik nog heb van python en c# trainingen...
const tips2 = [];
const totals2 = [];
for (const i in bills) {
    tips2.push(calcTip(bills[i]));
    totals2.push(bills[i] + tips2[tips2.length - 1]);
}

//Extra opdracht
const populations = [17, 84, 1145, 125];
console.log(populations.length === 4);
const percentages = [];
for (let i in populations) {
    percentages.push(percentageOfWorld1(populations[i]).toFixed(2));
};
console.log(percentages);

//Extra opdracht
const neighbours = ['Belgium', 'Germany', 'Luxembourgh'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
console.log(neighbours.includes('Germany') ? `Great country` : `Probably not a central european country`);
// if (!neighbours.includes('Germany')) {                           //Voorbeeld van de opdracht...
//     console.log('Probably not a central European country :D');
//   }
neighbours[neighbours.indexOf('Germany')] = `Republic of Germany`;
console.log(neighbours);

//Objects ---------------------------------------------------------------------------------------------------------------
// Key value pairs... firstName : 'Michel'
const michelObject = {          //Object literal syntax
    firstName: 'Michel',
    lastName: 'Prins',
    birthYear: 1987,
    job: 'OT-Engineer',
    friends: ['Sietse', 'Jeroen', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {          //Kan ook een function expression toevoegen als een METHOD!!!
    //     console.log(this);
    //     return 2037 - birthYear;
    // }

    //Version2
    // calcAge: function () {                  //Kan ook een function expression toevoegen als een METHOD!!!
    //     return 2037 - this.birthYear;       //This wijst naar het object die deze method aanroept
    // }

    //Version3
    calcAge: function () {                  //Kan ook een function expression toevoegen als een METHOD!!!
        this.age = 2037 - this.birthYear;       //This wijst naar het object die deze method aanroept
        return this.age;                        //Je hoeft dit uiteraard niet perse terug te sturen.
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
    }
};

console.log(michelObject);
console.log(michelObject.job);      //DOT notation... ;property
console.log(michelObject['job'])    //Bracket notation ;Hier kan je dus expressies gebruiken...

// const interestedIn = prompt(`What do you want to know about Michel? Choose between firstName, lastName, age, job and friends.`);

// michelObject[interestedIn] ? console.log(michelObject[interestedIn]) : `Not a correct input.`;
// console.log(michelObject[interestedIn]);       //Dit kan dus niet via de DOT notation.

michelObject.location = 'Netherlands';
michelObject['social'] = 'Niet aanwezig';
console.log(michelObject);

//Opdracht
console.log(`${firstName} has ${michelObject.friends.length} friends, and his best friend is called ${michelObject.friends[0]}.`);

//Methods -> michelObject heb ik aangepast met een METHOD!!!
// console.log(michelObject.calcAge(michelObject.birthYear));
//Version 2
console.log(michelObject.calcAge());        //michelObject roept de method calcAge() aan, dus met this keyword, wordt de birthyear uit michelObject gebruikt.
//version 3 (moet je functie nog wel aanroepen zoals in 2!)
console.log(michelObject.age);


//Extra opdracht
console.log(michelObject.getSummary());     //Extra method aangemaakt binnen het object..


//Challange 3 ====================================================================================================================================
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(`${mark.fullName}'s BMI (${mark.calcBMI().toFixed(1)}) is ${mark.bmi > john.calcBMI() ? `higher` : `lower`} than ${john.fullName}'s BMI (${john.bmi.toFixed(1)})`)
