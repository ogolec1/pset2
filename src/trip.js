const readlineSync = require("readline-sync");

const Students = readlineSync.question("\nStudents: ");
const Teachers = readlineSync.question("Teachers: ");
const BusCapacity = readlineSync.question("Bus Capacity: ");
const Passenger = parseInt(Students) + parseInt(Teachers)
let Bus2 = (Passenger) / (BusCapacity)
let Bus = Math.ceil(Bus2)
var Remainder = (Passenger) % BusCapacity;
console.log("\n" + Bus + " bus(es) is (are) needed, with " + Remainder + " passenger(s) on the last bus.\n");
