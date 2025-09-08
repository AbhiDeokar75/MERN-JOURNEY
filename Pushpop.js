// [ 5, 4, 3, 6, 5, 2, 7, 4, 3 ]
// [5, 4, 3, 6, 2, 7]

let arr1 = [ 5, 4, 3, 6, 5, 2, 7, 4, 3 ];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i])) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);
