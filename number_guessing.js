/*1. Number Guessing Game
Concepts: loops, conditionals, variables
Features:
Generate random number
User keeps guessing
Give hints: "Too high" / "Too low"
Count attempts
👉 This builds core logic thinking. */

const prompt = require("prompt-sync")();

// Number Guessing Game
console.log("<---------- Welcome to Number Guessing Game ---------->");
console.log("I have selected a random number between (1 - 100). Can you guess it?");

// Generate random number between (1 - 100)
const randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber); // For testing..

// Variables
let attempts = 0;
let guessedCorrectly = false;

// Loop
while (!guessedCorrectly) {
    const input = prompt("Enter the number between (1-100) or type 'exit' to quit:");

    // if user input is exiting the game already.
    if (input === 'exit') {
        console.log("Exiting game. Thanks for playing!");
        break;
    }

    const userGuessed = parseInt(input);

    // Validating the user input number.
    if (isNaN(userGuessed) || userGuessed < 1 || userGuessed > 100) {
        console.log("Invalid number! please give a valid number.");
        continue;
    }

    attempts++;

    // Game in the loop
    if (userGuessed === randomNumber) {
        guessedCorrectly = true;
        console.log(`Congrats! you have guessed the ${randomNumber} in ${attempts} attempts.`);
    } else if (userGuessed < randomNumber) {
        console.log("Too Low! Try again.");
    } else {
        console.log("Too High! Try again.");
    }
}



