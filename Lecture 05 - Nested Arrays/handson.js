/*
ques : Given a 2D Matrix, reverse each odd colums and print it
Input :
[
    [1, 2, 3, 4, 5, 6],
    [2, 6, 12, 43, 3, 5],
    [8, 10, 34, 23, 12, 8]
];

Output :
[
    [1, 10, 3, 23, 5, 8],
    [2, 6, 12, 43, 3, 5],
    [8, 34, 10, 12, 8, 23]
];
*/


// Primary & Secondary Diagonal Sum (N x N Matrix)


const arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 3x3 Grid

// Primary Diagonal → (0,0), (1,1), (2,2)
let N = arr5[0].length;
let Sum = 0;
for (let i = 0; i < N; i++) {
  Sum += arr5[i][i];
}
// TC = O(n)
// SC = O(1)
console.log("Primary Diagonal Sum:", Sum);

// Secondary Diagonal → (0,2), (1,1), (2,0)
Sum = 0;
for (let i = 0; i < N; i++) {
  Sum += arr[i][N - i - 1];
}
// TC = O(n)
// SC = O(1)
console.log("Secondary Diagonal Sum:", Sum);


// Print Odd-Numbered Column Elements of a Matrix
const arr6 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];
// Expected Output: print all elements from columns 1, 3, 5 (odd indices)

function printOddColElements(arr6) {
  let rows = arr6.length;
  let cols = arr6[0].length;

  for (let j = 0; j < cols; j++) {
    if (j % 2 == 0) continue; // skip even columns
    let ans = "";
    for (let i = 0; i < rows; i++) {
      ans += arr6[i][j] + " ";
    }
    console.log(ans);
  }
}

console.log("Odd Column Elements:");
printOddColElements(arr6);


// Homework — Reverse Each Odd Column

// Input:
// [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ]
// Output:
// [
//   [1, 10, 3, 23, 5, 8],
//   [2, 6, 12, 43, 3, 5],
//   [8, 2, 34, 4, 12, 6],
// ]

function reverseOddColumns(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let j = 0; j < cols; j++) {
    if (j % 2 === 0) continue; //skip even colums
    let top = 0;
    let bottom = rows - 1;

    while (top < bottom) {
      let temp = matrix[top][j];
      matrix[top][j] = matrix[bottom][j];
      matrix[bottom][j] = temp;

      top++;
      bottom--;
    }
  }

  return matrix;
}

console.log("Matrix After Reversing Odd Columns:");
console.log(reverseOddColumns(JSON.parse(JSON.stringify(arr6)))); // clone to avoid mutation


// Subarrays — Continuous Segments of an Array
const arr7 = [1, 2, 3, 4];
let m = arr7.length;

// Print all subarrays
console.log("All Subarrays:");
for (let i = 0; i < m; i++) {
  let subarray = "";
  for (let j = i; j < m; j++) {
    subarray += arr7[j] + " ";
    console.log(subarray);
  }
}


// Function to Find Sum of All Subarrays

// Example: arr3 = [1,2,3]
// Subarrays => [1], [1,2], [1,2,3], [2], [2,3], [3]
// Sum = (1)+(3)+(6)+(2)+(5)+(3)=20

function calSubarraySum(arr7) {
  let n = arr7.length;
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subSum = 0;
      for (let k = i; k <= j; k++) {
        subSum += arr7[j];
      }
    }
    totalSum += subSum;
  }

  return totalSum;
}

console.log("Sum of All Subarrays:", calSubarraySum(arr7));
