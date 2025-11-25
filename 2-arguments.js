const argCount = process.argv.length - 2;

if (argCount === 0) {
  console.log("No argument");
} else if (argCount === 1) {
  console.log("Argument found");
} else {
  // This covers all other cases (2 arguments or more)
  console.log("Arguments found");
}