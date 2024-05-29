//ASSIGNMENT N1

/*
Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
*/

/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);
*/

//ASSIGNMENT N2;
/*
The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).
*/

/*
function powdeclaration(populationn) {
    return populationn / 7900;
};

const Bulgaria = powdeclaration(8000000);
const Turkey = powdeclaration(85000000);
const Greece = powdeclaration(10000000)

console.log(Bulgaria);
console.log(Turkey);
console.log(Greece);

const powexpression = function (population) {
    return population / 7900;
};
*/

//ASSIGNMENT N3;

//Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

/*
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);
*/

//ASSIGNMENT N4;

/*
Create a function called describePopulation.Use the function type you like the most.This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.
*/

/*
function describePopulation(country, population) {

    const percentofPop = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, which is about ${percentofPop}% of the world.`
    return description
};

function percentageOfWorld3(population) {
    return (population / 7900) * 100;
};

const Bulgaria = describePopulation('Bulgaria', 8);
const Turkey = describePopulation('Turkey', 85);
const Greece = describePopulation('Greece', 10);

console.log(Bulgaria);
console.log(Turkey);
console.log(Greece);
*/

//ASSIGNMENT N5;

/*
Create an array containing 4 population values of 4 countries of your choice.You may use the values you have been using previously.Store this array into a variable called populations.

Log to the console whether the array has 4 elements or not(true or false).

Create an array called percentages containing the percentages of the world population for these 4 population values.Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

/*
const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);
*/

//ASSIGNMENT N6;

/*
Basic Array Operations (Methods)
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

/*
const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
console.log(neighbours);
*/

/* ASSIGNMENT N7 */

/*
Introduction to Objects
Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
*/

/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'Bulgarian',
    population: 8,
    neighbours: [Turkey, Greece, Serbia, Romania]
};
*/

/* ASSIGNMENT N8 */

/*
Dot vs. Bracket Notation
Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
*/

/*
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
*/

// ASSIGNMENT N9;

