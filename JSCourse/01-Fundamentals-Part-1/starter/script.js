
/* VALUES AND VARIABLES */

//let js = 'amazing';
//if (js === 'amazing') alert('js is fun');

//console.log(40 + 8 + 23 - 10);

//console.log('Zhoro');
//console.log(23);

//let firstName = 'Zhoro';
//let first = 'zhoro';
//let first_name_person = 'zhoro_';

//declaring a variable
//console.log(firstName);
//console.log(firstName);
//console.log(firstName);

/* let 3years = 3 - prohibited, js wont let us; syntax error; invalid or expected token */;

/* let zhor&dudu = 'ZD' prohibited, js wont let us; syntax error; invalid or expected token */;

//let zhoro_dudi = 'ZD works';

/* let new = 27; cannot use reserver key words, same goes for function, etc */;

//let name = 'zhoro';

/* 'name' keyword can cause problems, but (seems bad practice?) */;

//let Person = 'zhoro';

/* convention to not start variable names with upper case, variables with upper case naming are *reserved* for constats, like Pi */;

/* variable names should be descriptive */;

//let myFirstJob = 'support l1';
//let myCurrentJob = 'support l2'
/* right in the meow meow */;

//let job1 = 'support l1';
//let job2 = 'support l2';

//console.log(myFirstJob);

/* DATA TYPES */

/* there are 7 primitive data types
1. Number - Floating point numbers, used for decimal and integers let age = 23;
2. String - Sequence of characters, used for text let firstname = 'zhoro;
3. Boolean - Logical type that can only be true or false, used for taking decisions let fullAge = true;
4. Undefined - Value taken by a variable taht is not yet defiend ('empty value') let children;
5. Null - also means 'empty value';
6. Symbol (ES2015) - Value that is unique and cannot be changed
7. BigInt (E2020) - Larger integers than the Number type can hold
*/

/* JS has dynamic typing, we DO NOT have to manually define the data type of the value stored in the variable. Instead, data types are determined automatically */

/* its the value that has a type, not the variable */

//true;
//let javascriptIsFun = true;
//console.log(javascriptIsFun);

//console.log(typeof true);
//console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Zhoro');

//javascriptIsFun = 'YES!';
//console.log(typeof javascriptIsFun);

//let year;
//console.log(year);
//console.log(typeof year);
//undefined in console.log;

//year = 1991;
//console.log(year);
//console.log(typeof year);

//console.log(typeof null);
// type of null is object?? its a bug, error in JS, null is not an object

/* LET, CONST, VAR*/

/* We use the 'let' keyword to declare variables that can change later, during execution of the program */

//let age = 30;
//age = 31;

/* re-assigning value to a variable, mutate the age variable */

/* we use 'const' to declare variables taht are not supposed to change
during/at any point of the execution of the program or in the future, const cannot be changed*/

//const birthYear = 1991;

/* birthYear = 1992 
throws an error */;

/* cannot declare empty const variables as well 'const job' will throw an error, needs an initial value */;

/* for clean code, better practice, use const, or if we are sure the variable will change use let */;

/* 'var' keyword should be avoided, but we have to know how it works for legacy reasons, var is prior to ES6 */

//var job = 'support';
//job = 'support l2';

//lastName = 'Zhoro';
//console.log(lastName);

/* this does not create the variable in the current scope, it will create a property on the global object, should always properly declare variables */;

/* FUNDAMENTAL BASIC OPERATORS */

/* operator allows us to transform values or combine them, or do any kind of work with values */;

//math operators
/* const now = 2024;
const ageZhoro = now - 1991;
const ageDudu = now - 1991;
console.log(ageZhoro, ageDudu);
console.log(ageZhoro * 2, ageZhoro / 2, 2 ** 3);

// 2 ** 3 means 2 to the power or 3 = 2 * 2 * 2;

const firstName = 'zhoro';
const lastName = 'slavchev';

console.log(firstName + ' ' + lastName);

/* assignment operators, '=' */;

/*
let x = 10 + 5;
//x will be assigned 15, because + is executed before =, based on operator presedence
console.log(x);

// assignment operators
x += 10;
// this means x = x + 10
x *= 4;
// this means x = x * 4;
x++;
// this means x = x + 1
x--;
x--;
console.log(x);

//comparison operators, to produce boolean values;

console.log(ageZhoro > ageDudu)
// >, <, >=, <=
console.log(ageDudu >= 18);

const isFullAge = ageDudu >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

//operator precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

/* OPERATOR PRECEDENCE */

/*
const now = 2024;
const ageZhoro = now - 1991;
const ageDudu = now - 1991;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
// x = y = 10 first, x = 10;
// higher percedence, executed first, lower precedence, executet second;

const averageAge = ageZhoro + ageDudu / 2

//vs

const averageAge2 = (ageZhoro + ageDudu) / 2

console.log(ageZhoro, ageDudu); */

/* const firstName = 'Zhoro';
const job = 'support l2 agent';
const birthYear = 1991;
const year = 2024;

const zhoro = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.'

console.log(zhoro); */

//starting with ES6 we have template literals

/* const zhoroNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(zhoroNew);

console.log(`just a string...`)

//using template literals we can create multi line strings

console.log('String with \n\
multiple \n\
lines');

//vs

console.log(`String
with multiple
lines`) */

/* const age = 15;

if (age >= 18) {
    console.log(`Sarah can start a driving license.`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough to drive, she needs to grow up with ${yearsLeft} more years to drive.`)
};

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
};

console.log(century) */

/* TYPE CONVERSION AND TYPE COERCION */
// when js converts types behind the scenes for us

//type conversion

/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
//convert to a number
//the original values is not converted, still a strin
console.log(Number(inputYear) + 18);
//if we have a string and add something to a string,it will add/concactenate to the string

console.log(Number('Zhoro'));
//NaN, invalid number
console.log(typeof NaN);

//convert numbers to strings
console.log(String(23), 23);

//JS can convert to a string,number and boolean, but we cannot convert to undefined or to NULL;

// type coercion;

//whenever a operator is dealing with 2 values, converts one of the values to the other value;

console.log('I am ' + 23 + ' years old.');
//string, a number, another string
//when there is a operation between a number and a strig (when +), the number will be converted to a string

console.log('23' - '10' - 3);
//the - operator triggers the opposite coercion, strings are converted to numbers and not the other way around

console.log('23' * '2');
//goes to numbers, same goes for division
console.log('23' / '2');

//gues the output
let n = '1' + 1;
n = n - 1;
console.log(n);
//should be 10
*/

/* TRUTHY AND FALSEY VALUES */
/* 5 falsy values
1. 0 - zero
2. '' - empty string
3. undefined
4. null
5. NaN
*/
//not false by default, but when used as booleans will be fals
// everything else is true

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Zhoro'));
console.log(Boolean({}));
console.log(Boolean(''));
*/

//the conversion to boolean is implicit, not explicit, is always type coercion that js does behind the scenes

/*
const money = 0;
if (money) { //vs money = 100
    console.log('dont spend it all')
} else {
    console.log('you should get a job')
};

//another use case is to check if a variable is defined or not

let height; //didnt assigna a value, undefiend is falsy, 0 gives undefined as well, vs height = 123;
if (height) {
    console.log('height is defined')
} else {
    console.log('height is undefined')
};
*/

// EQUALITY OPERATORS == AND ===;

//strict equality operator, does not perform type coercion, return true only both values are exactly the same;

/*
const age = '18';
if (age === 18) console.log('You just became an adult. (strict)');

//loose equality operator, does type coercion
//'18' == 18, '18' converted to a number;

if (age == 18) console.log('You just became an adult.(loose)');

const favNumber = Number(prompt('What is your favourite number?'));
console.log(favNumber);
console.log(typeof favNumber);

if (favNumber === 23) {
    console.log('cool, 23 is an amazing number');
} else if (favNumber === 7) {
    console.log('cool, 7 is also a cool number')
} else if (favNumber === 8) {
    console.log(`8 is a cool number`)
} else {
    console.log(`cool, your number ${favNumber} is also a cool number`);
};

//not equal operator, 'different operator', != (loose), !== (strict);

if (favNumber !== 23) console.log('why not 23');

//alwayse use strict version
*/

//* BOOLEAN LOGIC, AND, OR & NOT OPERATORS

/*
1. AND OPERATOR, will be true only when all values/variables are true

2. OR OPERATOR, will be true if we have multiple variable, enough for 1 of them to be true for the whole operation to be true

3. NOT OPERATOR, inverts true/false value, acts on only 1 boolean value

IF 'A' is true, will become FALSE, If 'A' is FALSE, then NOT 'A' will become TRUE.

The NOT OPERATOR has precedence first, so they are calculated/inverted first and then they are combined/compared.
*/

/* const hasDriversLience = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLience && hasGoodVision);
console.log(hasDriversLience || hasGoodVision);
console.log(!hasDriversLience);

// if (hasDriversLience && hasGoodVision) {
//     console.log(`Sarah is able to drive`)
// } else {
//     console.log(`Someone else should drive`)
// };

const isTired = false; //C

console.log(hasDriversLience || hasGoodVision || isTired);

if (hasDriversLience && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
};

*/

/* SWITCH */

/*
const day = 'friday';

switch (day) {
    case 'monday': { //day === 'monday'
        console.log(`it is monday, work`)
        console.log(`learn after work`)
        break;
    }
    case 'tuesday': {
        console.log(`it is tuesday, work`)
        console.log(`learn after work`)
        break;
    }
    case 'wednesday': {
        console.log(`it is wednesday, work`)
        console.log(`learn after work`)
        break;
    }
    case 'thursday': {
        console.log(`it is thursday, work`)
        console.log(`learn after work`)
        break;
    }
    case 'friday': {
        console.log(`it is friday, work`)
        console.log(`learn after work`)
        break;
    }
    case 'saturday': {
        console.log(`relax`)
        console.log(`study after relax`)
        break;
    }
    case 'sunday': {
        console.log(`relax`)
        console.log(`study after relax`)
        break;
    }
    default: {
        console.log(`not a valid day`)
    }
}

//switching does strict comparisson

if (day === 'monday') {
    console.log(`work, then study`)
} else if (day === 'tuesday') {
    console.log(`work, then study`)
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`work, then study`)
} else if (day === 'friday') {
    console.log(`work, then study`)
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`relax, then work`)
} else {
    console.log(`not a valid day`)
} */

//STATEMENTS AND EXPRESSIONS

/* 
3 + 4
1991
true && false && !false
//all expressions, will produce boolean value

if (23 > 10) {
    const str = '23 is bigger'
};

//statement, doesnt produce value, the str is an expression tho
*/