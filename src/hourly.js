const readlineSync = require("readline-sync");
const HourlyWage = readlineSync.question("\nHourly wage: ");

let Monday = readlineSync.question("\nMonday: ");
const MondayWage = Monday * HourlyWage

let Tuesday = readlineSync.question("Tuesday: ");
const TuesdayWage = Tuesday * HourlyWage

let Wednesday = readlineSync.question("Wednesday: ");
const WednesdayWage = Wednesday * HourlyWage

let Thursday = readlineSync.question("Thursday: ");
const ThursdayWage = Thursday * HourlyWage

let Friday = readlineSync.question("Friday: ");
const FridayWage = Friday * HourlyWage

let Saturday = readlineSync.question("Saturday: ");
const SaturdayWage = Saturday * HourlyWage

let Sunday = readlineSync.question("Sunday: ");
const SundayWage = Sunday * HourlyWage

let Total = (MondayWage + TuesdayWage + WednesdayWage + ThursdayWage + FridayWage + SaturdayWage + SundayWage)
Total = Total.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.log("\nYou'll make $" + Total + " this week.\n");
