const password = 9872;
let guess = 0;

while (guess != password) {
    guess++; // Increment guess
    console.log(`Trying ${guess}`);
    if (guess == password) {
        console.log(`Password found ${guess}!`);
    }
}