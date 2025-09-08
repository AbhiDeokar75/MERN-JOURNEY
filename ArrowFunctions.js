// Arrow Functions

const calculator = () => {
    let num1 = 50, num2 = 5;
    let operation = "add";
    if(operation === "add") {
        eval(num1, num2, (num1, num2) => num1 + num2);
    }

    if(operation === "sub") {
        eval(num1, num2, (num1, num2) => num1 - num2);
    }

    if(operation === "mul") {
        eval(num1, num2, (num1, num2) => num1 * num2);
    }

    if(operation === "div") {
        eval(num1, num2, (num1, num2) => num1 / num2);
    }
}

const eval = (num1, num2, evaluate) => {
    console.log("The result after evaluation is : ", evaluate(num1, num2));
}

calculator();
