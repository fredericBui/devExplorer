// En cours de développement
const prompt = require('prompt-sync')();
const mysteryWord = "javascript";
const mysteryWordLength = mysteryWord.length;
const correctLetters = [];
let lettersFound = [];
let attempts = 5;

for (let i = 0; i < mysteryWord.length; i++) {
    correctLetters.push(mysteryWord[i]);
}

console.log(`Try to guess the word letter by letter. The word has ${mysteryWordLength} letters.`);

while (attempts != 0) {
    let promptedLetter = prompt("Enter a letter: ");
    if (lettersFound.includes(promptedLetter)) {
        console.log("You already guessed that letter. Try again.");
    } else if (correctLetters.includes(promptedLetter)) {
        lettersFound.push(promptedLetter);
        console.log(`Correct! Letters found so far: [${lettersFound}]`);
    } else {
        attempts--;
        console.log(`Incorrect guess. You have ${attempts} attempts left. Letters found so far: [${lettersFound}]`);
    }
}

console.log("Game over! The word was: " + mysteryWord);