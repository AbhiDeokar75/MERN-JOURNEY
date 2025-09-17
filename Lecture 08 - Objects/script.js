// TASK - Create a person object with name, age and city
// For this object add hobby, update city and print the age of this object

const person = {
    name: "Raj",
    age: 18,
    city: "Pune",
};

person.hobby = "Singing";
person.city = "Nagpur";
console.log(person.age);


//Create a classroom array of 4 students
// each students will have name, age, gender, grade, address and in address it will have addressLine1, addressLine2, city, HouseNo
// Print the name, age, and HouseNo of all Students residing in Pune City

const classroom = [
    {
        name: "Ravi",
        age: 20,
        gender: "Male",
        grade: "A",
        address: {
            addressLine1: "Omega Residency",
            addressLine2: "Baner",
            city: "Pune",
            houseNo: 10,
        },
    },
    {
        name: "Akash",
        age: 18,
        gender: "Male",
        grade: "B",
        address: {
            addressLine1: "Alpha Residency",
            addressLine2: "Kharadi",
            city: "Pune",
            houseNo: 11,
        },
    },
    {
        name: "Ninad",
        age: 17,
        gender: "Male",
        grade: "C",
        address: {
            addressLine1: "Bhaktiwoods Residency",
            addressLine2: "Panchvati",
            city: "Nashik",
            houseNo: 12,
        },
    },
    {
        name: "Sumeet",
        age: 19,
        gender: "Male",
        grade: "D",
        address: {
            addressLine1: "Regency Cosmos",
            addressLine2: "Near Rankala",
            city: "Kolhapur",
            houseNo: 13,
        },
    },
];

for (i in classroom) {
    if (classroom[i].address.city == "Pune") {
        console.log("Name : ", classroom[i].name, ", Age : ", classroom[i].age, ", Address : ", classroom[i].address.houseNo);
    }
}


// functions inside objects

const CarObj = {
    name: "Audi",
    model: "A4",
    year: 2019,
    color: "White",

    running : function() {
        console.log("Car is running");
    }
}

CarObj.running();

//Create PortfolioObj with name, skills in array, showSkills() function which will print all the skills in one line and addSkill(skillName) which adds a skill to Skills Array

const PortfolioObj = {
    name: "Raj",
    skills: ["HTML", "CSS", "JS"],
    showSkills : function () {
        console.log(this.skills);
    },
    addSkill : function (skillName) {
        this.skills.push(skillName);
    }
}

PortfolioObj.showSkills();
PortfolioObj.addSkill("React");
PortfolioObj.showSkills();
