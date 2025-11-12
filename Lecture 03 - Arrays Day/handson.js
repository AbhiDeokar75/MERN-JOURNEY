const arrA = [1, 2, 3, 4, 5];
const arrB = [6, 7, 8, 9];

console.log("Array A:", arrA);
console.log("Array B:", arrB);

// includes() - checks if element exists
console.log("Does arrA include 3?", arrA.includes(3)); // true
console.log("Does arrA include 9?", arrA.includes(9)); // false

// indexOf() - gives index of an element
console.log("Index of 4 in arrA:", arrA.indexOf(4)); // 3
console.log("Index of 9 in arrA:", arrA.indexOf(9)); // -1

// concat() - joins two arrays
const arrC = arrA.concat(arrB);
console.log("Concatenated Array:", arrC);

// Factorial of a Number

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

let num = 5;
console.log(`Factorial of ${num} is:`, factorial(num)); // 120

// nCr (Combinations) using factorial
// Formula: nCr = n! / (r! * (n - r)!)

function nCr(n, r) {
  if (r > n) return 0;
  let result = factorial(n) / (factorial(r) * factorial(n - r));
  return result;
}

console.log("nCr(5, 2):", nCr(5, 2)); // 10
console.log("nCr(6, 3):", nCr(6, 3)); // 20


// Average of Array Elements

const marks = [90, 80, 70, 60, 50];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

let average = sum / marks.length;
console.log("Average of marks:", average); // Output: 70


// Prefix Sum of an Array
// Example:
// arr = [3, 5, 1, 4, 5, 8]
// prefix = [3, 8, 9, 13, 18, 26]

const arr = [3, 5, 1, 4, 5, 8];
const pref = [];

pref[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
  pref[i] = pref[i - 1] + arr[i];
}

console.log("Original Array:", arr);
console.log("Prefix Sum Array:", pref);


// Tricky Code Examples
const num1 = 23.5;
const val = "abc";

console.log(val * 2); // NaN (since string * number is invalid)
console.log(num1.toFixed(3) + 12); // "23.500" + 12 => "23.50012"


// Frequency Count of Array Elements
// Example: arr1 = [1, 2, 1, 4, 2, 2, 4]
// Output: (1,2), (2,3), (4,2)

const arr1 = [1, 2, 1, 4, 2, 2, 4];
console.log("Original Array:", arr1);

for (let i = 0; i < arr1.length; i++) {
  let x = arr1[i];
  if (x == -1) continue;

  let count = 0;
  for (let j = 0; j < arr1.length; j++) {
    if (x === arr1[j]) {
      count++;
    }
  }

  console.log(`(${x}, ${count})`);

  for (let j = 0; j < arr1.length; j++) {
    if (x === arr1[j]) {
      arr1[j] = -1;
    }
  }
}
