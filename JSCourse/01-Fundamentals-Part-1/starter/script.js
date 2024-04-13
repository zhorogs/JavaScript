
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

const age = 15;

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

console.log(century)



