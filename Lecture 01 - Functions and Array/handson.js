// Simple Function (no parameters)
function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet(); // Output: Hello, welcome to JavaScript!


// Function with Parameters
function add(a, b) {
  return a + b;
}
let result = add(5, 10);
console.log("Addition:", result); // Output: 15


// Function with Default Parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log("Multiply (default):", multiply(5));    // Output: 10
console.log("Multiply (custom):", multiply(5, 3));  // Output: 15


// Function that Returns a Value
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let fullName = getFullName("Abhi", "Deokar");
console.log("Full Name:", fullName); // Output: Abhi Deokar


// Function Calling Another Function
function square(num) {
  return num * num;
}
function sumOfSquares(a, b) {
  return square(a) + square(b);
}
console.log("Sum of Squares:", sumOfSquares(3, 4)); // Output: 25


// Function Expression (Assigned to a Variable)
const subtract = function(a, b) {
  return a - b;
};
console.log("Subtraction:", subtract(10, 4)); // Output: 6


// Function for String Manipulation
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log("Capitalized:", capitalize("javascript")); // Output: Javascript


// Function for Loops
function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log("Number:", i);
  }
}
printNumbers(5); // Outputs numbers 1–5


// Function with Conditional Logic
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log("Check Even/Odd:", checkEvenOdd(7)); // Output: Odd


// Function Using Arrays
function findMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log("Max Number:", findMax([3, 7, 2, 9, 5])); // Output: 9
