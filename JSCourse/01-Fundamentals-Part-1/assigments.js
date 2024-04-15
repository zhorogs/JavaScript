/* ASSIGNMENT N1 Values and Variables*/;

/* Declare variables called country, continent and population and assign their values according to your own country (population in millions).

Log their values to the console. */

/* const country = 'Bulgaria';
const continent = 'Europe';
let population = 7;

console.log(country, continent, population); */

/* or
console.log(country);
console.log(continent);
console.log(population);
*/

/* ASSIGNMENT N2 Data Types
Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

Log the types of isIsland, population, country and language to the console.
*/;

/* const isIsland = false;
const language = 'Bulgarian';

console.log(isIsland, population, country, language); */

/* ASSIGNMENT N3 let const var 
Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.*/;

/* ASSIGNMENT N4
Basic Operators
If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.*/

/*
const country = 'Bulgaria';
const continent = 'Europe';
let population = 7;

console.log(country, continent, population);

const isIsland = false;
const language = 'Bulgarian';

console.log(isIsland, population, country, language);

const half = population / 2;
console.log(half, 'half pop in each half');
population++;
console.log(population);
population = 7;

const finPop = 6;

const comparePop = population > finPop;
console.log(comparePop);

const countryAvgPop = 33;

const compareAvgPop = population <= countryAvgPop;
console.log(compareAvgPop);

const description = country + ' is in ' + continent + ', ' + 'and its all ' + population + ' million people speak ' + language + '.';
console.log(description);

const descriptionNew = `${country} is in ${continent} and its all ${population} millions of people speak ${language}.`;
console.log(descriptionNew) */

//ASSIGNMENT N5

/* If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original. */

/* const country = 'Bulgaria';
const continent = 'Europe';
let population = 7;

console.log(country, continent, population);

const isIsland = false;
const language = 'Bulgarian';

console.log(isIsland, population, country, language);

const half = population / 2;
console.log(half, 'half pop in each half');
population++;
console.log(population);
population = 7;

const finPop = 6;

const comparePop = population > finPop;
console.log(comparePop);

const countryAvgPop = 33;

const compareAvgPop = population <= countryAvgPop;
console.log(compareAvgPop);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
    below average`
    );
};
*/

//ASSIGNMENT N6
/*
Type Conversion and Coercion﻿
Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?
*/

/*
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617, string
console.log('19' - '13' + 17); // ->  23 
console.log('123' < 57); // -> false 
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/
