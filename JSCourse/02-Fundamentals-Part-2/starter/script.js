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

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);

