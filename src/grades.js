const readlineSync = require("readline-sync");

let Homework = readlineSync.question("\nEnter three homework grades.\n");
let Homework2 = readlineSync.question("");
let Homework3 = readlineSync.question("");
let Quiz = readlineSync.question("\nEnter three quiz grades.\n");
let Quiz2 = readlineSync.question("");
let Quiz3 = readlineSync.question("");
let Test = readlineSync.question("\nEnter three test grades.\n");
let Test2 = readlineSync.question("");
let Test3 = readlineSync.question("");
const HomeworkWGHT = Homework * 0.15
const Homework2WGHT = Homework2 * 0.15
const Homework3WGHT = Homework3 * 0.15
const QuizWGHT = Quiz * 0.35
const Quiz2WGHT = Quiz2 * 0.35
const Quiz3WGHT = Quiz3 * 0.35
const TestWGHT = Test * 0.5
const Test2WGHT = Test2 * 0.5
const Test3WGHT = Test3 * 0.5
const HomeworkAVG = (HomeworkWGHT + Homework2WGHT + Homework3WGHT) / 3
const QuizAVG = (QuizWGHT + Quiz2WGHT + Quiz3WGHT) / 3
const TestAVG = (TestWGHT + Test2WGHT + Test3WGHT) / 3
let Grade = (HomeworkAVG + QuizAVG + TestAVG)
Grade = Grade.toLocaleString("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.log("\nYour marking period grade is " + Grade + "%.\n");
