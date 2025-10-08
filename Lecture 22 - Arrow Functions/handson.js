/* write an arrow function to check if the number is divisible by 3 or not*/

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


/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
    this.players.forEach((value) => {
      console.log(value.id, value.scores);
    })
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
   this.players.push({id: id, scores: []});
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    this.players.push({id: id, scores: [score]});
  },

  averageScore: function (id, scores) {
    /* find the player with this id and calculate its avg score and return it*/

  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57

const arr3 = [1, 2, 6, 10];
let sum =0;
for( let i = 0; i < arr.length; i++) {
  sum += arr3[i];
}

console.log("Sum of array - " + sum);
