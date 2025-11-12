// Left rotaion by 1 element
// const arr3 = [ 1, 2, 3, 4, 5];
// let leftCopy = arr3[0];

// for(let i = 0; i < arr3.length; i++) {
//     arr3[i] = arr3[i] + 1;
// }
// arr3.length - 1 = leftCopy;
// console.log(arr3);

// Right rotation by 1 element
// const arr4 = [1, 2, 3, 4, 5];
// let rightCopy = arr4[arr4.length - 1];
// for(let i = 0; i < arr4.length; i--) {
//     arr[i] = arr[i - 1];
// }

// arr4[0] = rightCopy;
// console.log(arr4);

// Sum of Columns in matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix[0].length; i++) {
  let sum = 0;
  for (let j = 0; j < matrix.length; j++) {
    sum += matrix[j][i];
  }
  console.log(sum);
}

// Sum of rows in matrix
for (let i = 0; i < matrix.length; i++) {
  let sum = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    sum += matrix[i][j];
  }
  console.log(sum);
}


// Transpose of Square Matrix
let squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = squareMatrix.length;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let temp = squareMatrix[i][j];
    squareMatrix[i][j] = squareMatrix[j][i];
    squareMatrix[j][i] = temp;
  }
}
console.log(squareMatrix);


// Right transpose of matrix
let rightTranspose = [];

for (let i = 0; i < matrix[0].length; i++) {
  rightTranspose[i] = [];
  for (let j = 0; j < matrix.length; j++) {
    rightTranspose[i][j] = matrix[j][i];
  }
}
console.log(rightTranspose);


// Left Transpose of Matrix
let leftTranspose = [];
for (let i = 0; i < matrix.length; i++) {
  leftTranspose[i] = [];
  for (let j = 0; j < matrix[0].length; j++) {
    leftTranspose[i][j] = matrix[i][j];
  }
}
console.log(leftTranspose);
