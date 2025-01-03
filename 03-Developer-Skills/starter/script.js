// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const testLangeNaam = 23;

console.log(testLangeNaam);
//FIXME:
//TODO:
//BUG:

console.log(`Hoi Michel!`);
console.log('Dit werkt wel een stuk sneller op deze manier.');

console.log(`test`);

//Problem1:
//Write the temp amplitude... (sometimes an error)
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 27, 15, -14, 9, 5];
const temperatures2 = [10, -5, -6, -1, 'error', 9, 13, 37, 15, 14, 9, 5];

//Understanding the problem:
//1 -> what is the amplitude? Answer: Difference between highest and lowest temp.
//1a -> how to compute the max and min temps in an array, and what to do with an error?

//Breaking in sub problemns:
// -How to ignore errors?
// -How to find max value in array?
// -How to find min value in array?
// -How to substract min and max value in array and retun it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i in temps) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem2:
//Function should now recieve 2 arrays of temps.

//Questions: Do we need to implement the functionality twice? -> NO!
//So how to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i in temps) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitudeNew);

//==========================================================================================
//==========================================================================================
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt(`Degrees celsius: `)), //-> hier hebben we een aanpssing gedaan...
    value: 10, //Gedaan om niet steeds die prompt te krijgen...
  };
  //   console.warn(measurement.value);       //Geeft een warming in console
  //   console.error(measurement.value);      //Geeft een error in console
  // B-> Find the bug
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// debugger;   //Dan zet js zelf hier een breakpoint in de code om het te debuggen!
console.log(measureKelvin());

//==========================================================================================
//==========================================================================================
//Challange 1!
const printForecast = function (arr) {
  /*
  Wat moet er gebeuren?
    Loop
    Concatinate a string
  */

  let str = '...';
  for (let i in arr) {
    //i wordt hier gezien als een string...
    str += ` ${arr[i]}°C in ${Number(i) + 1} days ...`; //degrees symbol = alt + 0176
  }
  return str;
};

const testArr1 = [17, 21, 23];
const testArr2 = [12, 5, -5, 0, 4];

console.log(printForecast(testArr2));
