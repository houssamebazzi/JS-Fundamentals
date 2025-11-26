function add (a, b) {
    return a + b;
}
 const [,, num1str, num2str] = process.argv;
    const num1 = parseInt(num1str);
    const num2 = parseInt(num2str);
     console.log (add(num1, num2));
     