/* TASK -->
1. Function to Reverse the string
2. Function to Check if the string is a Palindrome
3. Function to Find number of words in a string
4. Function Find the longest word in the string
5. Function to find the first non repeating character in the string
*/

// 1. Function to Reverse the string
function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
    return str;
}

// 2. Function to Check if the string is a Palindrome
function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return str === rev;
}

// 3. Function to Find number of words in a string
function countWords(str) {
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }
    return count;
}

const str = "Hello World";
console.log(reverseString(str));
console.log(isPalindrome(str));
console.log(countWords(str));
