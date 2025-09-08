/*
let numbers = [1,2,6,8,9,3,5];
let largest = numbers[0];
let smallest = numbers[0];
let count = 0;

//Largest Number
function largestNumber() {
    for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest Number is: ",largest);
}

//Smallest Number
function smallestNumber() {
    for (let i=1; i<numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers [i];
    }
    }
    console.log("Smallest Number is: ",smallest);
}

//Even Number Count
function evenNumber() {
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        count++;
    }
    }
    console.log("Total Even Numbers are: ",count);
}

largestNumber();
smallestNumber();
evenNumber();


//Average Rating
let rating1 = 10.5;
let rating2 = 12.5;
let rating3 = 12.15;
let averageRating;
function calculateAverageRating () {
    averageRating = Math.floor((rating1+rating2+rating3)/3);
    console.log(averageRating);
}
calculateAverageRating();


//Multiplication Table of 8
let num =8;
for (let i=1; i<=10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
}


//Prime Number
let num1 = 11;
let count1 = 0;
for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
        count1++;
    }
}
if (count1 == 0) {
    console.log(`${num1} is a prime number`);
} else {
    console.log(`${num1} is not a prime number`);
}


//Simple Calculator USing Switch Case

let choice, num2, num3, ans;
function add() {
    num2 = Number(prompt("Enter first number: "));
    num3 = Number(prompt("Enter second number: "));
    ans = num2+num3;
    console.log(ans);
}

function absSub() {
    num2 = Number(prompt("Enter first number : "));
    num3 = Number(prompt("Enter second number : "));
    ans = Math.abs(num2-num3);
    console.log(ans);
}

function multiply() {
    num2 = Number(prompt("Enter first number : "));
    num3 = Number(prompt("Enter second number : "));
    ans = num2*num3;
    console.log(ans);
}

function division() {
    num2 = Number(prompt("Enter first number : "));
    num3 = Number(prompt("Enter second number : "));
    if(num3 == 0) {
        console.log("Cannot divide by zero");
    } else {
    ans = num2/num3;
    console.log(ans);
    }
}

function power() {
    num2 = Number(prompt("Enter Number : "));
    num3 = Number(prompt("Enter power : "));
    ans = Math.pow(num2,num3);
    console.log(ans);
}

function squareRoot() {
    num2 = Number(prompt("Enter Number : "));
    ans = Math.sqrt(num2);
    console.log(ans);
}

function maximum() {
    num2 = Number(prompt("Enter First Number : "));
    num3 = Number(prompt("Enter Second Number : "));
    ans = Math.max(num2,num3);
    console.log(ans);
}

do {
console.log(`calculator Menu : 
1. addition
2. subtraction
3. multiplication
4. division
5. power
6. square root
7. maximum`);

choice = Number(prompt("Enter your choice: "));

switch (choice) {
    case 1:
        add();
        break;
    case 2:
        absSub();
        break;
    case 3:
        multiply();
        break;
    case 4:
        division();
        break;
    case 5:
        power();
        break;
    case 6:
        squareRoot();
        break;
    case 7:
        maximum();
        break;
    default:
        console.log("Invalid choice");
        break;
    }
} while (choice < 8);


//Count Vowels in a String

let str = "Hello, My name is Abhi";
const vowels = 'aeiouAEIOU';
function countVowels() {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log(count);
}

countVowels();
*/

/*Print
1
12
123
1234*/

/*for (let i = 1; i <= 4; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + j;
    }
    console.log(str);
}*/



