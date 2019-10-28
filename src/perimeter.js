const readlineSync = require("readline-sync");

const CENTIMETERS_PER_INCH = 2.54;

let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

let widthMM = width * CENTIMETERS_PER_INCH;
let lengthMM = length * CENTIMETERS_PER_INCH;
let perimeter = 2 * (widthMM + lengthMM);

perimeter = perimeter.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

console.log("\nA(n) " + width + "-by-" + length + " inch sheet of paper has a perimeter of " + perimeter + " centimeter(s) .\n");
