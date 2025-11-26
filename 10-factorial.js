function factorial(n) {
    if (isNaN(n) || n <= 1) {
        return 1;
        } 
        return n*factorial(n - 1);
    }
const [,, numstr] = process.argv;
const num = parseInt(numstr);
console.log(factorial(num));