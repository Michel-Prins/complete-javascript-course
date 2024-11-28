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

console.log(country);
console.log(continent)
console.log(population)

//Excirsise 2
const isIsland = false;
const language = 'Dutch';

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

//IF ELSE Control Structure
if (age >= 18) {
    console.log('Jeej oud genoeg 🎉')
} else {
    const yearsLeft = 18 - age;
    console.log(`Je bent niet oud genoeg, je moet nog ${yearsLeft} jaren wachten! 😒`)
}