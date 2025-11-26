const [,, sistr] = process.argv;
const square = parseInt(sistr);
if (isNaN(square)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < square; i++) {
        let rowstring = "";
        for (let j = 0; j < square; j++) {
            rowstring += "X";
        }
        console.log(rowstring);
    }
}
