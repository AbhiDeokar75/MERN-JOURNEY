/*//factorial of 5

let fact = 1;
for (let i = 1; i <= 5; i++) {
  fact *= i;
}
console.log(fact);*/


//find nCr using function
//nCr = n![(n - r)!*r!]
// given array -> [4,10,6,8] and r=4;
// Find nCr of each element of array

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
function nCr(n,r) {
    const nFact = factorial(n);
    const rFact = factorial(r);
    const nrFact = factorial(n - r);
    const result = nFact / (rFact * nrFact);
    return result;
}

function nCrofArray(arr) {
    const n = arr.length;
    const r = 4;
    const ans = [];

    for(let number of arr) {
        ans.push(nCr(number,r));
    }
    return ans;
}
const arr = [4,10,6,8];
console.log(nCrofArray(arr));

//Write the function to calculate the average of array

const arr2 = [4,8,3,5];
function average(arr2) {
  let avg = 0;
  for (let i = 0; i < arr2.length; i++) {
    avg += arr2[i];
  }
  return avg / arr2.length;
}
console.log(average(arr2).toFixed(6));
