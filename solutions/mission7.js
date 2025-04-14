const prompt = require('prompt-sync')();
const chineseZodiacArray = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

const birthYear = prompt("Enter your birth year: ");

// The Chinese Zodiac cycle starts from 1912, which is the year of the Rat.
const zodiacIndex = (birthYear - 1912) % 12; // This will give us a number between 0 and 11, which corresponds to the index of the zodiac animal in the array.
const zodiacAnimal = chineseZodiacArray[zodiacIndex]; // This will give us the zodiac animal based on the index calculated above.
console.log(`Your Chinese Zodiac sign is: ${zodiacAnimal}`);