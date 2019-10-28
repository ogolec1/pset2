const readlineSync = require("readline-sync");

let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

let diagonal = Math.sqrt(width ** 2 + length ** 2)

diagonal = diagonal.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

console.log("\nA(n) " + width + "-by-" + length + " inch sheet of paper has a diagonal of " + diagonal + " inch(es).\n");
