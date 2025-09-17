/* Given a parenthesis string consisting of only '(' and ')', check if its valid or not*/

function isValid(str) {
    let isValid = true;
    let open = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            open++;
        } else if (str[i] === ")") {
            open--;
        }
        if (open < 0) {
            isValid = false;
            break;
        }
    }
    return isValid && open === 0;
}

console.log(isValid("((()))"));
console.log(isValid("(()"));
