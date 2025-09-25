/* Given two sorted arrays A and B, merge them into a single sorted array 
Input : A = [1, 3, 4, 7, 10], B = [2, 9, 12]
Output : [1, 2, 3, 4, 7, 9, 10, 12]*/

function mergeArray(arr1, arr2) {
  let arr3 = [];
  for(let i = 0; i < arr1.length; i++){
    arr3.push(arr1[i]);
  }
  for(let i = 0; i < arr2.length; i++){
    arr3.push(arr2[i]);
  }
  for(let i = 0; i < arr3.length; i++){
    for(let j = i + 1; j < arr3.length; j++){
      if(arr3[i] > arr3[j]){
        let temp = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = temp;
      }
    }
  }
  return arr3;
}

const arr1 = [1, 3, 4, 7, 10];
const arr2 = [2, 9, 12];
console.log(mergeArray(arr1, arr2));
