'USE STRICT';

//we can use strict for a specific function or specific block of code;

//strict mode forbids us to do certain things and will create visible errors for us in certain situations;

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`i can drive`);

//strict mode introduces a short list of variable names that are reserved, will console log if it happens;

//const if = 23;