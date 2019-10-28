const readlineSync = require("readline-sync");

const AnnualSalary = readlineSync.question("\nAnnual salary: ");
let InitialSalary = AnnualSalary / 24

const PreTax = 0.07
const Federal = 0.157
const State = 0.0447
const Social = 0.062
const Medicare = 0.0145

let Tax1 = AnnualSalary / 24
let Tax2 = Tax1 - (Tax1 * PreTax)
let Tax3 = Federal + State + Social + Medicare
let Tax4 = Tax2 * Tax3
let Tax5 = Tax2 - Tax4

let TakeHome = Tax5.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.log("\nYour take-home pay each check will be " + TakeHome + ".\n");
