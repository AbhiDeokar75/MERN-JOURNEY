//types of array declarations
const arr1 = ["Ravi", "Rani", "Rahul"];
const arr2 = new Array(1, 2, 3, 4, 5);
const emptyArray = [];
const emptyArray2 = new Array();

// Calculate total marks, average, grade usings arrays and arrow functions

/*const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;
}

const calculateAverage = () => {
    return calculateTotal() / marks.length;
}

const calculateGrade = () => {
    const average = calculateAverage();
    if (average <=100 && average > 80) {
        return "A";
    } else if (average <= 80 && average > 70) {
        return "B";
    } else if (average <= 70 && average > 60) {
        return "C";
    } else if (average <= 60 && average > 40) {
        return "D";
    } else {
        return "F";
    }
}

const marks = [80, 90, 70, 85, 95];
const total = calculateTotal();
const average = calculateAverage();
const grade = calculateGrade();

console.log("Total marks: ", total);
console.log("Average marks: ", average);
console.log("Grade: ", grade);*/


const students = ["Rahul", "Puneet", "Sachin", "Ravi", "Rani"];
//print 2nd student
console.log(students[1]);
//print roll no and name of 4th student
console.log(4, students[3]);

//print all students names
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//for in loop
for (let i in students) {                      // i -> datatype is string
    console.log(Number(i) + 1, students[i]);
}

//print all students will even roll numbers
console.log("Student with Even roll numbers");
for(let i in students) {
    if ((Number(i)+1) % 2 == 0) {
        console.log(students[i]);
    }
}


// for of loop  --> only gives values and not the indices
for (student of students) {
    console.log(student);
}

//homogeneous properties of arrays
const arr3 = [1,2,3,4,5];

// heterogeneous properties of arrays
const arr4 = [1, "Ravi", 2, 5.6, 3, "Rahul", function () {}];

// SOME FUNCTIONS OF ARRAY
const iplTeams = ["CSK", "MI", "RCB", "SRH"];

// add some elements
iplTeams.push("KKR"); // inserts elements at the end

// remove some elements 
iplTeams.pop(); // removes elements from the end

// unshift elements
iplTeams.unshift("DC"); //inserts elements at the beginning

// shift elements
iplTeams.shift(); //removes elements from the beginning

console.log(iplTeams);

// slice --> makes shallow copy of the array
console.log(iplTeams.slice(1)); // returns all elements from index 1 and removes the element till index 1

// negative slice
console.log(iplTeams.slice(-2)); // keeps 2 elements from end
