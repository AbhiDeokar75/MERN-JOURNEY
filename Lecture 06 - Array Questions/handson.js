// Find 2nd Largest element in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    } else if (arr[i] > sMax) {
        sMax = arr[i];
    }
}
console.log(sMax);

//Reverse Array with Extra Space
let temp = new Array(arr.length);
let j = 0;

for(let i = arr.length - 1; i >= 0; i--){
    temp[j] = arr[i];
    j++;
}
console.log(temp);

//Reverse Array without Extra Space
let i = 0;
let k = arr.length - 1;

while(i < k){
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    i++;
    k--;
}
console.log(arr);

//Place all 0's on left hand side and all 1's on right hand side
let arr2 = [1, 1, 0, 1, 0, 1, 1, 0, 0];
let m = 0;
let n = 0;
while (m < arr2.length) {
    if(arr2[m] == 0){
        let temp = arr2[m];
        arr2[m] = arr2[n];
        arr2[n] = temp;
        n++;
    }
    m++;
}
console.log(arr2);

