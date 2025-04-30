const prompt = require("prompt-sync")();

// Update the display array with the correct letters
function updateDisplay(word, letter, display) {
  for (let i = 0; i < display.length; i++) {
    if (word[i] === letter) {
      display[i] = letter;
    }
  }
}

let misteryWord = "hello";
let lives = 5;

// Create an array with the same word length to display
let displayWord = [];
for (let i = 0; i < misteryWord.length; i++) {
    displayWord[i] = "_";
}

while (true) {
  console.log(displayWord);
  console.log(`${lives} lives`);

  if (lives <= 0) {
    console.log(`Game Over! The word was ${misteryWord}`);
    break;
  }

  if (displayWord.join("") === misteryWord) {
    console.log(`You found it! ${misteryWord} is the correct word!`);
    break;
  }

  let letter = prompt("Make a guess: ");

  if (displayWord.includes(letter)) {
    console.log("You already guessed this letter");
  } else if (!misteryWord.includes(letter)) {
    console.log("Wrong!");
    lives--;
  } else {
    console.log("Right!");
    updateDisplay(misteryWord, letter, displayWord);
  }
}

// Try to track all letters typed by the user