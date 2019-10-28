const readlineSync = require("readline-sync");

const MILLIMETERS_PER_INCH = 25.4;

let Width = readlineSync.question("Width: ");
let Length = readlineSync.question("Length: ");

let WidthMM = Width * MILLIMETERS_PER_INCH;
let LengthMM = Length * MILLIMETERS_PER_INCH;
let Area = WidthMM * LengthMM;
Area = Area.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

console.log("\nA(n) " + Width + "-by-" + Length + " inch sheet of paper has an area of " + Area + " square millimeter(s).\n");
