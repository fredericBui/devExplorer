function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Example usage, try to change the values of a and b for each function
let addResult = add(5, 3);
let subtractResult = subtract(5, 3);
let multiplyResult = multiply(5, 3);
let divideResult = divide(5, 3);

// Display the results
console.log("Addition: " + addResult); // Output: 8
console.log("Subtraction: " + subtractResult); // Output: 2
console.log("Multiplication: " + multiplyResult); // Output: 15
console.log("Division: " + divideResult); // Output: 1.6666666666666667