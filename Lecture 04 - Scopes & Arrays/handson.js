// Global Scope
let globalVar = "I am a global variable";

function showGlobal() {
  console.log(globalVar); // Accessible inside function
}
showGlobal();
console.log(globalVar); // Accessible outside too


// Function Scope (var)
function functionScopeExample() {
  var funcVar = "I am function-scoped";
  console.log(funcVar);
}
functionScopeExample();


// Block Scope (let and const)
{
  let blockLet = "I am block-scoped (let)";
  const blockConst = "I am block-scoped (const)";
  console.log(blockLet);
  console.log(blockConst);
}


// Variable Shadowing
let x = 10;
function shadowExample() {
  let x = 20; // shadows global x
  console.log("Inside function:", x);
}
shadowExample();
console.log("Outside function:", x);


// Lexical Scope Example
function outer() {
  let outerVar = "Outer variable";

  function inner() {
    console.log(outerVar); // Accessible inside inner function
  }

  inner();
}
outer();


// Creating and Printing Arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Accessing Elements by Index
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);


// Manually Adding Elements to Array
let newFruit = "Orange";
fruits[fruits.length] = newFruit; // add at end
console.log("After Adding Orange:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Manually Removing Last Element
let removedFruit = fruits[fruits.length - 1];
fruits.length = fruits.length - 1; // reduce array size
console.log("After Removing Last Fruit:", removedFruit);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Adding Element at Beginning (Shift manually)
let newFirst = "Pineapple";
for (let i = fruits.length; i > 0; i--) {
  fruits[i] = fruits[i - 1]; // shift right
}
fruits[0] = newFirst;
console.log("After Adding Pineapple at Start:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Removing First Element (Shift Left manually)
let removedFirst = fruits[0];
for (let i = 0; i < fruits.length - 1; i++) {
  fruits[i] = fruits[i + 1];
}
fruits.length = fruits.length - 1;
console.log("After Removing First Element:", removedFirst);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Finding an Element Manually
let searchFruit = "Banana";
let found = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === searchFruit) {
    console.log(searchFruit, "found at index", i);
    found = true;
    break;
  }
}
if (!found) {
  console.log(searchFruit, "not found");
}


// Manual Array Copy
let copiedFruits = [];
for (let i = 0; i < fruits.length; i++) {
  copiedFruits[i] = fruits[i];
}
console.log("Copied Array:");
for (let i = 0; i < copiedFruits.length; i++) {
  console.log(copiedFruits[i]);
}


// Manual Array Merge
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [];
let k = 0;

for (let i = 0; i < arr1.length; i++) {
  merged[k++] = arr1[i];
}
for (let j = 0; j < arr2.length; j++) {
  merged[k++] = arr2[j];
}

console.log("Merged Array:");
for (let i = 0; i < merged.length; i++) {
  console.log(merged[i]);
}


// Manual Maximum Element
let numbers = [12, 5, 7, 19, 3];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Maximum Number:", max);


// Manual Sum of Elements
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of Numbers:", sum);


// Manual Reverse Array
let reversed = [];
for (let i = 0; i < numbers.length; i++) {
  reversed[i] = numbers[numbers.length - 1 - i];
}
console.log("Reversed Array:");
for (let i = 0; i < reversed.length; i++) {
  console.log(reversed[i]);
}
