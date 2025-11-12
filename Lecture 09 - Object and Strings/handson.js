// 1. Employee Object
const employee = {
  name: "Sahil",
  age: 25,
  department: "IT",
};

// Add a new property
employee.experience = 2; 

// Update an existing property
employee.department = "Software Development";

// Print a specific value
console.log("Employee Age:", employee.age);


// 2. Array of book objects with nested publisher details
const library = [
  {
    title: "JavaScript Basics",
    author: "Amit Desai",
    year: 2021,
    publisher: {
      name: "TechPress",
      city: "Mumbai",
      branchNo: 101,
    },
  },
  {
    title: "Learn Node.js",
    author: "Neha Patil",
    year: 2022,
    publisher: {
      name: "CodeWorld",
      city: "Pune",
      branchNo: 102,
    },
  },
  {
    title: "Mastering MongoDB",
    author: "Rohan Kulkarni",
    year: 2023,
    publisher: {
      name: "DataHouse",
      city: "Delhi",
      branchNo: 103,
    },
  },
  {
    title: "Frontend with HTML & CSS",
    author: "Sneha Joshi",
    year: 2020,
    publisher: {
      name: "TechPress",
      city: "Pune",
      branchNo: 104,
    },
  },
];

// Print details of books published in Pune
console.log("\nBooks published in Pune:");
for (let book of library) {
  if (book.publisher.city === "Pune") {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Branch No: ${book.publisher.branchNo}`
    );
  }
}


// 3. Developer Portfolio Object
const Developer = {
  name: "Snehal",
  languages: ["C", "C++", "JavaScript"],

  showLanguages: function () {
    console.log("Known Languages:", this.languages.join(", "));
  },

  addLanguage: function (lang) {
    this.languages.push(lang);
  },
};

// Display and update skills
Developer.showLanguages();
Developer.addLanguage("Python");
Developer.showLanguages();


// 4. Create a company object with employees (nested objects)
const company = {
  emp1: {
    name: "Aarav",
    age: 24,
    department: "Development",
    city: "Pune",
  },
  emp2: {
    name: "Meera",
    age: 26,
    department: "Design",
    city: "Mumbai",
  },
  emp3: {
    name: "Vikram",
    age: 23,
    department: "Testing",
    city: "Pune",
  },
};

// Print name and department of employees who live in Pune
console.log("Employees living in Pune:");

for (let key in company) {
  if (company[key].city === "Pune") {
    console.log(
      `Name: ${company[key].name}, Department: ${company[key].department}`
    );
  }
}
