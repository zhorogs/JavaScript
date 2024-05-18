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

const friend1 = 'Michael';
const friedn2 = 'Steven';
const friend3 = 'Peter';

//bundle all of these values together to a container, like a DS, an array;

//two most important data structures, atleast in js, are arrays and objects;

const friends = ['Michael', 'Steven', 'Peter'];
