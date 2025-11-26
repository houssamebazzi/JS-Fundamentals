#!/usr/bin/node

// 1. Declare two constant variables (arg1 and arg2) and assign them
//    values from the process.argv array using Destructuring.
//    - The first two commas (', ,') skip the Node executable path [0] 
//      and the script file path [1].
//    - arg1 takes the value at index [2] (the first user argument).
//    - arg2 takes the value at index [3] (the second user argument).
//    * If an argument is missing, the variable will be assigned 'undefined'.
const [, , arg1, arg2] = process.argv;

// 2. Use console.log() to print the final output.
//    - Template Literals (backticks `` ` ``) are used to combine the 
//      variables and the literal string " is " into a single, correctly 
//      spaced output string.
console.log(`${arg1} is ${arg2}`);