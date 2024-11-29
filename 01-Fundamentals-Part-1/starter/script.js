let js = 'amazing'; //; is niet verplicht zoals C# om te gebruiken, maar leer je dit wel aan!
/*
if (js === 'amazing') //=== is een vergelijk.
    alert('JavaScript is FUN!');
*/
40 + 8 + 23 - 10;   //Op deze manier wordt er helemaal niks mee gedaan.  
console.log(40 + 8 + 23 - 10); //Op deze manier zou je de uitkomst in de console van de website terug moeten vinden

'Michel' //This is a value
let firstName = 'Michel' //declaring a variable. //camelCase gebruiken voor variablen.

//als we een output willen, dan gebruiken we altijd console.log()
console.log(firstName)

//excersise 1
let country = 'Netherlands';
let continent = 'Europe';
let population = '18';

//let kan je tenminste als waarde nog laten veranderen...
//Const kan je de hele waarde niet meer veranderen???

console.log(country);
console.log(continent)
console.log(population)

//Excirsise 2
const isIsland = false;
let language = 'Dutch';

console.log('Is it a Island?: ' + isIsland);
console.log('Language spoken: ' + language);

//Comparison operators; -> >, <, >=, <=


//Excersise 4
console.log('population by half: ' + population / 2);
population++;
console.log('Added 1: ' + population);

const popFinland = 6;
console.log('Our population greater than Finland? ' + (population > popFinland));
const avgPopulation = 33;
console.log('Our population greater than Average? ' + (population > avgPopulation));
const sentence = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(sentence);

const sentenceTemplateLiterals = `The ${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(sentenceTemplateLiterals);

if (population < avgPopulation) {
    console.log(`The ${country} population is ${avgPopulation - population} million below avarage.`)
}

//Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

//Template Literals
const michelNew = `I'm ${firstName} ❤`;
console.log(michelNew)

const age = 15;

//Tussen de { } noem je een block
//IF ELSE Control Structure
if (age >= 18) {
    console.log('Jeej oud genoeg 🎉')
} else {
    const yearsLeft = 18 - age;
    console.log(`Je bent niet oud genoeg, je moet nog ${yearsLeft} jaren wachten! 😒`)
}

//Challange 2
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}

console.log('9' - '5'); // -> ?4
console.log('19' - '13' + '17'); // -> ?617
console.log('19' - '13' + 17); // -> ?23
console.log('123' < 57); // -> ?false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?1143

//TYPE Conversion
//Convert String to Numner: Number("18");
console.log(Number("18"));

//TYPE COERCION
console.log('You are ' + 19 + ' old.')
console.log('You are ' + String(19) + ' old.')  //Zoals in een andere taal zoasl c# zou je deze moeten gebruiken.
//Alle calculation operators wordt alles naar een int gemaakt, met een + word de string concatenated

//5 falsy values: 0, '', undefined (let money), null, NaN
//Voorbeeld:

const money = 0;    //Dit wordt dus een false!
if (money) {
    console.log(`Dont spend it all! 🤑`);
} else {
    console.log(`You should gat a job!`);
}

//Equiality operators
//== uses type coercion (loose)
//=== does not use coercion (strict) => is the better used version
const ageEquiality = 18;
if (ageEquiality === 18) console.log(`You just became an adult.`);

//const favouriteNumber = prompt(`Whats your favourite number?`);
//console.log(`Your favourite number: ${favouriteNumber}`);

// if (favouriteNumber == 23) { // '23' == 23
//     console.log(`Cool! 23 is an amazing number!`);
// }

//Better use!
//const favouriteNumber2 = Number(prompt(`Whats your favourite number?`));

// if (favouriteNumber2 === 23) { // '23' == 23
//     console.log(`Cool! 23 is an amazing number!`);
// }

// !== strict version for not is |  != loose version


// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`);
// } else console.log(`No borders!`);

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision)

// || = OR
// && = AND
// ! = inverter value
//TIP! Ctrl + / = comment

if ((language === 'English') && (population < 50) && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else { console.log(`${country} does not meet your criteria :(`); }

//Challange 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreKoalas === scoreDolphins) {
    console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else { console.log("Koalas win the trophy"); }


//Switches => Beter leesbaar! Wordt niet zoveel meer gebruikt...
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;  //zonder de break zou hij verder gaan met de code hieronder.
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':       //wo en do hebben hetzelfde gedrag
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':        //za en zo zijn ook gelijk hier... Kijk goed naar de break!
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


//Dit is hetzelfde als met een case...
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

//Conditianal formatter/Operator (Ternary)!
//Sneller dan if else!
age >= 18 ? console.log(`Jeej, zuipen!`) : console.log(`Jammer joh, lekker aan de gemeente pils!`);
//Boven is een voorbeel, als volgt wrdt gebruikt

const drink = age >= 18 ? 'Beer' : 'Water';
console.log(drink);

language = 'chinese';

switch (language) {
    case 'chinese':
    case 'manderin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

const isAvgPopulation = population > avgPopulation ? 'above' : 'below';
console.log(`${country}'s population is ${isAvgPopulation} average`);
// Even better!!!
console.log(`${country}'s population is ${population > avgPopulation ? 'above' : 'below'} average`);

//Challange 4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip + bill}`)