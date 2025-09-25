/* write an arrow function to check if the number is divisible by 3or not*/

const isDivisibleBy3 = (num) => {
    return num % 3 == 0;
  };
  
  console.log(isDivisibleBy3(9));

/* Higher Order Functions [HOFs] */

// 1. forEach()

let arr = [1, 2, 3, 4];
console.log(
    arr.forEach((value, index, array) => {
        value *= 2;
        array[index] = value;
        console.log(value, index, array);
    })
);


let users = [
    { name: "Ramesh", age: 20 },
    { name: "Suresh", age: 10 },
    { name: "Rani", age: 40 },
  ];
  
  users.forEach((value) => {
    console.log(value.name + " is " + value.age + " years old");
  });


// 2. map()
/* Trasnform the name of each user to uppercase */

let users2 = [
    { name: "Ramesh", age: 20 },
    { name: "Suresh", age: 10 },
    { name: "Rani", age: 40 },
  ];
  
  let userNames = users2.map((value) => {
    return { name: value.name.toUpperCase(), age: value.age };
  });
  
  console.log(userNames);

// 3. filter()
/*let names = [Pranjal, Bhavesh, Uday, Sidhharth, Neha]
Filter above names array in a way that the names less than 5 characters are eliminated
*/

let names = ["Pranjal", "Bhavesh", "Uday", "Sidhharth", "Neha"];
let filteredNames = names.filter((value) => {
    return value.length > 5;
  });
  console.log(filteredNames);
