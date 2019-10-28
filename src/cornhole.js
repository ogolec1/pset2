const readlineSync = require("readline-sync");

let Width = 48
let Length = 24
let Diameter = 6

let CircleArea = 0.25 * Math.PI * Diameter ** 2
let BoardArea = Width * Length

let SurfArea = BoardArea - CircleArea
SurfArea = SurfArea.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.log("\nThe surface area of a standard Cornhole board is " + SurfArea + " square inch(es).\n")
