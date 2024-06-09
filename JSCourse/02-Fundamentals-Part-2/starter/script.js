'USE STRICT';

//we can use strict for a specific function or specific block of code;

//strict mode forbids us to do certain things and will create visible errors for us in certain situations;

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`i can drive`);
*/

//strict mode introduces a short list of variable names that are reserved, will console log if it happens;

//const if = 23;

/* FUNCTIONS */

//what are functions? a piece of code that we can re-use over and over again in our code, its like a variable, but for a whole block/chunks of code

/*
function logger() {
    console.log(`my name is zhoro`);
}

//whatever is between the curly braces is the function code and this will be executed everytime we call the functions

logger();
logger();
logger();

//invoking the functions, calling the functions, running the functions;

//we also pass data into a function, a function can also return data back as well;

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

//parameters are like variables specific only to this functions, input data of this functions, arguments

const appleJuice = fruitProcessor(5, 0); //capturing the values
console.log(appleJuice);
console.log(fruitProcessor(5, 2)) // did not capture the values;

//now we can re-use the functions with different values;

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//not all functions need to return something and not all functions doesnt need to capture/have parameters;

//functions allow us to write more maintanable code;

//DRY principle;
*/

/* FUNCTION DECLARATION VS EXPRESSION */
/*
//function declaration;
function calcAge1(birthYear) {
    return 2024 - birthYear;
};

const age1 = calcAge1(1991);
console.log(age1);

//function expression;

const calcAge2 = function (birthYear) {
    return 2024 - birthYear
};

//function withot a name, anonymous functions, an expression produces a value and use that value and store it into calcAge2;
//to call this function we do it in the same way;

const age2 = calcAge2(1991);
console.log(age2);

//expressions produce values;

//functions are actually just values, as a number or str, its not a type, but its also a value, if it is a value we can store it in a variable;

//what is the difference? we can actually call declarations before defined in the code;

//dependant on HOISTING;

//which type of functin shuold be used? often times is matter of personal preference?;
*/

/* ARROW FUCTIONS */

/*
const calcAge3 = birthYear => 2024 - birthYear;
//function expression, storig it in a variable;
//return happens implicitly;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    //return retiremennt;
    return `${firstName} retires in ${retirement} years`
};

//we can only omit the return if we have one liner functios;

console.log(yearsUntilRetirement(1991, 'zhoro'));
console.log(yearsUntilRetirement(1991, 'dudu'));

//what type of functions should i use? its complicated since there is a fundamental difference between arrow functions and function declaration and expression, the arrow function doesnt get the "this" keyword.;
*/

/* FUNCTIONS CALLING OTHER FUNCTIONS */

/*
function cutFrootPieces(fruit) {
    return fruit * 4;
}
function foodProcessor(apples, oranges) {
    const applePieces = cutFrootPieces(apples);
    const orangePieces = cutFrootPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
};

console.log(foodProcessor(2, 3));
*/

/* REVIEWING FUCNTIONS */

/*
const calcAge = function (birthYear) {
    return 2024 - birthYear
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} has more ${retirement} years until retirement.`)
        return retirement
    }
    else {
        console.log(`${firstName} has already retired.`)
        return -1999;
        //return immediately returns the funcion, no code after the return will be executed
    }
    //return `${firstName} retires in ${retirement} years`
};

yearsUntilRetirement(1991, "Zhoro");
yearsUntilRetirement(1950, "Mike");
//negative number, already retired
*/

/* Function types
    1. Functio declaration;

    function calcAge(birthYear) {
        return 2024 - birthYear;
    };
    Functions that can be used before its declared
    2. Function expression;
    const calcAge = function (birthYear) {
        return 2024 - birthYear
    };
    Essentially a function VALUE stored in a variable;
    3. Arrow funtion;
    const calcAge = birthYear => 2024 - birthYear;
    Great for a quick one-line functionns. Has no "this" keyword.

    All of them can work with data, input data, transoform data and output data.

    A functio needs a function name, parameters (placeholders to receive input values. Like local variables of a function.), function body (block of code that we want to reuse, process the function's input data), a return statement, to putput the value of the function, calling the function, using "()", since the function has parameters, we call the functions with Arguments: actual values of function parameters, to input the data.

    const age = function
    age = variable to save the returned value (function output)
*/

/* ARRAYS */

/*
const friend1 = 'Michael';
const friedn2 = 'Steven';
const friend3 = 'Peter';

//bundle all of these values together to a container, like a DS, an array;

//two most important data structures, atleast in js, are arrays and objects;

const friends = ['Michael', 'Steven', 'Peter'];
//literal syntax;
console.log(friends);

const y = new Array(1991, 1992, 1993, 2024);

//array can hold as many values as we want and values of any type that we'd like;

//how to get elements out of the array

console.log(friends[0]);

//arrays are 0 based, first element is positioned 0, not 1

console.log(friends[2]);

//get the actual numbers of elements in the array;

console.log(friends.length);

//we can use this to automatically the last element of any array;

console.log(friends[friends.length - 1]);

//inside the brackets we can put any expression;
//expresion is something that produces a value;
//important to know what is expression and what is statement;

//add/remove elements of/to the array;

friends[2] = 'Jay';
console.log(friends);

//variables declared with const cannot be changed, but we can change elements within an array declared with const, only primitive values are immutable;
//we cannot replace the entire array;

//friends = ['Bob', 'Alice'];
//assignment to constant variable;

//array can hold different types of values at the same time;

const firstName = 'zhoro'
const zhoro = [firstName, 'slavchev', 2024 - 1991, friends]

//we can put arrays inside of arrays;
console.log(zhoro);

// excersise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

//cannot do
//calcAge(years);
//returns NaN;

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// we can place function calls into arrays, because the produce a value, an expression;
console.log(ages);
*/

/* BASIC ARRAY OPERATIOSN (METHODS) */

/*
//add elements
const friends = ['Zhoro', 'Dudu'];

const newLength = friends.push('zozo', 'dudu');

//push is a method (a function)
console.log(friends);
console.log(newLength);

friends.unshift('firstzozo');
console.log(friends);

//push and unshift also retur the length of the array;

//remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);
//pop removes the last element of the array
//pop returns the removed element

friends.shift;
//removes the first elemet of the array
console.log(friends);

//method that tells us at which position is the element in the array
console.log(friends.indexOf('Dudu'));

//ES6 method, "includes", returns true if the element is in the array and false if it is not;

console.log(friends.includes('zozo'));
console.log(friends.includes('John'));

//we can use the includes method to write conditionals, one of the useful applications of this method;

if (friends.includes('zozo')) {
    console.log(`yes`)
} else console.log(`no`)
*/

// OBJECTS //

/*
//array
const zhoroArray = [
    'zhoro',
    'slavchev',
    2024 - 1991,
    'support l2',
    ['dudu', 'zhoro']
];

//we can reference only by order number;

//in objects, we define key value pairs;

const zhoroObject = {
    firstName: 'zhoro',
    lastName: 'slavchev',
    age: 2024 - 1991,
    job: 't2 lever support engineer',
    friends: ['zhoro', 'dudu']
};
//object literal syntax;

//each of these keys is also called a property;
//objects are the most fundamental concepts in js;

//use arrays for ordered data and objects for unordered data;

//how do we get data from objects;
*/

// DOT VS BRACKET NOTATION IN OBJECTS

/* 
const zhoroObject = {
    firstName: 'zhoro',
    lastName: 'slavchev',
    age: 2024 - 1991,
    job: 't2 lever support engineer',
    friends: ['zhoro', 'dudu']
};

console.log(zhoroObject);

//dot notation to get data from the object;
console.log(zhoroObject.lastName);

//bracket notation;
console.log(zhoroObject['lastName']);
//in the bracket notation we can put any expression that we like, we can compute it from an operation (operation is an expression);

const nameKey = 'Name';
console.log(zhoroObject['first' + nameKey]);
console.log(zhoroObject['last' + nameKey]);

//same thing will not work for dot notation;

//when to use dot and when to use bracket notation
//when we need to compute the property name, we use bracket notation, in any other case use the dot notation;

const interestedIn = prompt('What do you want to know about Zhoro? Choose between firstname, lastname, age, job and friends.');
console.log(interestedIn);

//we get undefined if we try to access a property on a object that does not exist

console.log(zhoroObject[interestedIn]);

//undefined is a falsy value;

if (zhoroObject[interestedIn]) {
    console.log(zhoroObject[interestedIn]);
} else {
    console.log(`Wrong choice. Choose between firstname, lastname, age, job and friends.`)
};

zhoroObject.location = 'Bulgaria, Sofia'
console.log(zhoroObject.location);
console.log(zhoroObject);

//challenge in the end of the video;
//write 'Zhoro has 3 friends, and his best friend is called Dudu';

console.log(`${zhoroObject.firstName} has ${zhoroObject.friends.length} friends, and his best friend is called ${zhoroObject.friends[1]}.`);
*/

/* TEST COMMIT */

/* OBJECT METHDS */

/*
Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

Call the describe method.

Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.&*/

/* The FOR Loop */

/*
Iteration: The for Loop﻿
There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
*/
