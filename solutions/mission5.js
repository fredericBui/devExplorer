const prompt = require('prompt-sync')();
const mysteryNumber = 42;

let guess = prompt("Guess the number (between 1 and 100): ");

// Simple number guessing game
if (guess == mysteryNumber) {
    console.log("Congratulations! You've guessed the number!");
} else {
    console.log("Sorry, that's not the correct number.");
}

// Try to improve condition with ternary condition
// You can also ask the user to guess again while the guess is wrong