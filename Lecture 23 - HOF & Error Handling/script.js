/*function Sum(arr) {
    let sum=0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
}*/

// Find the sum of the array
let arr = [2, 5, 3, 10, 34];
let sum = arr.reduce((accumulator, val, index, array) => {
    accumulator += val;
    return accumulator;
}, 0);
console.log({ sum });

//Find the count of the even numbers
let even = arr.reduce((accumulator, val, index, array) => { 
    accumulator += val % 2 === 0;
    return accumulator;
}, 0);
console.log({ even });

//Find the frequency of Each Element
let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "Apple", "Guava"];
function freqofElements (fruits) {
    let obj = {};
    for(let i in fruits) {
        obj[fruits[i].toLowerCase()] = (obj[fruits[i].toLowerCase()] || 0) + 1;
    }
    return obj;
}
console.log(freqofElements(fruits));

//Find the frequency of Element using reduce()
let freq = fruits.reduce((accumulator, val, index, array) => {
    accumulator[val.toLowerCase()] += (accumulator[val.toLowerCase()] || 0) + 1;
    return accumulator;
}, {});
console.log({ freq });

/* find()
    - returns a value
    - returns the first element that matches the condition
*/

let findKiwi = fruits.find((val, index, array) => val.toLowerCase() === "kiwi");
    console.log(findKiwi);

// Q1] Given an array of object, containing details of users, console the names of first user aged above 30
const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 22, isActive: true },
    { name: "Diana", age: 28, isAcuive: false },
    { name: "Ethan", age: 35, isActive: true }
];

let ageAbove30 = users.find((value, index, array) => value.age > 30);
console.log(ageAbove30.name);

// Q2] Print the name and age of each user
    users.forEach((value, index, array) => {
        console.log(value.name, value.age);
    })

/* Q3] Function to create an array of names from above users
    o/p : ["Alice", "Bob", "Charlie", "Diana", "Ethan"]
*/
let ArrayOfNames = users.map((value, index, array) => value.name);
console.log(ArrayOfNames);

// Q4] Function to display all the active users form above users array
let activeUsers = users.filter((value, index, array) => value.isActive);
console.log(activeUsers);

// Q5] Function to find the sum of age of all users below 30
let sumOfAge = users.filter((value, index, array) => value.age < 30).reduce((accumulator, val, index, array) => {
    accumulator += val.age;
    return accumulator;
}, 0);
console.log(sumOfAge);

// Q6] Function to find the names of all active users
let activeUsersNames = users.filter((value, index, array) => value.isActive === true).map((value, index, array) => value.name);
console.log(activeUsersNames);


/* =============== Passing a Function as an argument & returning a function =============== */
function Calculator(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

let Sum = Calculator(3, 4, add);
console.log({ Sum });
