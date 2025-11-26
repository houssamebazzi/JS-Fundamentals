#!/usr/bin/node

// Access the arguments passed to the Node.js script via process.argv.
// process.argv is an array where:
// [0] = 'node' executable path
// [1] = path to the script file
// [2] = the first argument provided by the user (which we call 'userArg')

// Use Array Destructuring to extract the third element (index 2) directly.
// We use commas (', ,') to skip the first two elements.
// If the third element is missing, 'userArg' will be assigned 'undefined'.
const [, , userArg] = process.argv;

// Use a conditional (Ternary) operator to determine the output.
// We check if the extracted argument is 'undefined', which happens when 
// no argument is passed by the user.
const output = userArg === undefined 
    ? "No argument" // Value if the condition (userArg === undefined) is TRUE
    : userArg;       // Value if the condition is FALSE (an argument exists)

// Print the final result.
console.log(output);