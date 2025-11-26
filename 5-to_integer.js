#!/usr/bin/node

// 1. ARGUMENT ACCESS
// Extract the first user argument (at index 2) using Array Destructuring.
// If no argument is passed, 'firstArg' will be 'undefined'.
const [, , firstArg] = process.argv;

// 2. CONVERSION AND VALIDATION
//
// The global function 'parseInt(string)' attempts to convert a string to an integer.
// - If successful (e.g., '89' or '89.89'), it returns the integer (e.g., 89).
// - If unsuccessful (e.g., 'School' or 'undefined'), it returns the special value 'NaN' (Not a Number).
const myNumber = parseInt(firstArg);

// 3. CONDITIONAL OUTPUT
//
// We check if the result of the conversion (myNumber) is NaN using the global 
// function isNaN(). This is the safest way to check if a value is NaN.
if (isNaN(myNumber)) {
  // If the conversion failed (resulting in NaN), print the error message.
  console.log('Not a number');
} else {
  // If the conversion succeeded (it's a valid integer), print the required format.
  // We use Template Literals to easily combine the string with the integer value.
  console.log(`My number: ${myNumber}`);
}