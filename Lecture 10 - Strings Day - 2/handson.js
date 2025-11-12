/*
A. Camel Case Conversion
   Input: "employee last name"
   Output: "employeeLastName"

B. Snake Case Conversion
   Input: "employee last name"
   Output: "employee_last_name"
*/

const stringConverter = {
  // camelCase - e.g. employeeLastName
  camelCase: function (str) {
    str = str.trim();
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        result += str[i + 1].toUpperCase();
        i++;
      } else {
        result += str[i];
      }
    }
    return result;
  },

  // snake_case - e.g. employee_last_name
  snakeCase: function (str) {
    str = str.trim();
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") newStr += "_";
      else newStr += str[i];
    }
    return newStr;
  },
};

const text = "employee last name";
console.log("camelCase of '" + text + "' is:", stringConverter.camelCase(text));
console.log("snake_case of '" + text + "' is:", stringConverter.snakeCase(text));


// Reverse a String

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("\nReversed string of 'developer' is:", reverseString("developer"));


// Check if String is a Palindrome

function isPalindrome(str) {
  let n = str.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
}

const pal1 = "level";
const pal2 = "coding";
console.log(`\nIs '${pal1}' a palindrome?`, isPalindrome(pal1));
console.log(`Is '${pal2}' a palindrome?`, isPalindrome(pal2));


// Count Number of Words in a String

function numberOfWords(str) {
  str = str.trim();
  let count = 1; // at least one word if string isn't empty
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] !== " ") count++;
  }
  return count;
}

const sentence = "  JavaScript is very powerful  ";
console.log("\nNumber of words:", numberOfWords(sentence));

// Find Largest Word in a String

function largestWordInString(str) {
  str = str.trim();
  let currentWord = "";
  let largestWord = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      if (currentWord.length > largestWord.length) {
        largestWord = currentWord;
      }
      currentWord = "";
    } else {
      currentWord += str[i];
    }
  }
  return largestWord;
}

const longSentence = "Backend development using Node and Express";
console.log("\nLargest word:", largestWordInString(longSentence));


// Find First Non-Repeating Character

function firstNonRepeatingCharacter(str) {
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === char) count++;
    }

    if (count === 1) return char;
  }

  return "No non-repeating character";
}

const word1 = "success";
const word2 = "aabbcc";
console.log("\nFirst non-repeating character in 'success':", firstNonRepeatingCharacter(word1));
console.log("First non-repeating character in 'aabbcc':", firstNonRepeatingCharacter(word2));
