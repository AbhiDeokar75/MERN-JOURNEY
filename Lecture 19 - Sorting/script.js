/* Sort the given data in ascending order */
const data = [4, 1, 3, 7, 5];
for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] > data[j]) {
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}
console.log(data);
