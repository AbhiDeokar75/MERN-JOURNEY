// Create a person object, add a new property, update one, print one
const employee = {
  name: "Aarav",
  age: 25,
  city: "Mumbai",
};

employee.hobby = "Photography"; // adding new property
employee.city = "Delhi"; // updating property
console.log("Employee Age:", employee.age); // accessing property

console.log(employee); // optional: to view the full object


// Classroom Array of Objects (Nested Objects)
// Each student has: name, age, gender, grade, and address (nested object)
const classroom = [
  {
    name: "Isha",
    age: 19,
    gender: "Female",
    grade: "A",
    address: {
      addressLine1: "Sunshine Apartments",
      addressLine2: "Viman Nagar",
      city: "Mumbai",
      houseNo: 21,
    },
  },
  {
    name: "Dev",
    age: 20,
    gender: "Male",
    grade: "B",
    address: {
      addressLine1: "Bluebell Society",
      addressLine2: "MG Road",
      city: "Delhi",
      houseNo: 32,
    },
  },
  {
    name: "Kavya",
    age: 18,
    gender: "Female",
    grade: "A",
    address: {
      addressLine1: "Crystal Towers",
      addressLine2: "Aundh",
      city: "Pune",
      houseNo: 14,
    },
  },
  {
    name: "Rohan",
    age: 22,
    gender: "Male",
    grade: "C",
    address: {
      addressLine1: "RiverView Homes",
      addressLine2: "Baner",
      city: "Pune",
      houseNo: 18,
    },
  },
];


// Print name, age, and houseNo of students residing in Pune
console.log("\nStudents living in Pune:");
for (let i in classroom) {
  if (classroom[i].address.city === "Pune") {
    console.log(
      "Name:",
      classroom[i].name,
      ", Age:",
      classroom[i].age,
      ", House No:",
      classroom[i].address.houseNo
    );
  }
}


// Functions Inside Objects
const BikeObj = {
  brand: "Royal Enfield",
  model: "Hunter 350",
  year: 2023,
  color: "Black",

  start: function () {
    console.log("The bike has started 🏍️");
  },

  stop: function () {
    console.log("The bike has stopped 🛑");
  },
};

BikeObj.start();
BikeObj.stop();


// Portfolio Object with Functions
const DeveloperPortfolio = {
  name: "Ishaan",
  skills: ["JavaScript", "Node.js", "MongoDB"],

// function to show all skills in a single line
  showSkills: function () {
    let skillsLine = "";
    for (let i = 0; i < this.skills.length; i++) {
      skillsLine += this.skills[i];
      if (i < this.skills.length - 1) skillsLine += ", ";
    }
    console.log("Skills:", skillsLine);
  },

  // function to add a new skill
  addSkill: function (newSkill) {
    this.skills.push(newSkill);
  },
};

DeveloperPortfolio.showSkills();
DeveloperPortfolio.addSkill("ReactJS");
DeveloperPortfolio.addSkill("Express.js");
DeveloperPortfolio.showSkills();
