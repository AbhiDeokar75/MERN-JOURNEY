// Pattern Programming :

// 1. Right Angled Traingle Star pattern ->
function rightAngledTriangleStar(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}


// 2. Right Angled Traingle Number pattern ->
function rightAngledTriangleNumber(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j + " ");
        }
        console.log();
    }
}


// 3. Right Angled Traingle Alphabet pattern ->
function rightAngledTriangleAlphabet(n) {
    for (let i = 1; i <= n; i++) {
        let ascii = 65;
        for (let j = 1; j <= i; j++) {
            process.stdout.write(String.fromCharCode(ascii) + " ");
            ascii++;
        }
        console.log();
    }
}


// 4. Inverted Right Angled Traingle Star pattern ->
function invertedRightAngledTriangleStar(n) {
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}


// 5. Mirror Right Angled Traingle Star pattern ->
function mirrorRightAngledTriangleStar(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}


// 6. Diamond pattern ->
function diamondPattern(n) {
    //1st Half
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) { //spaces
            process.stdout.write(" ");
        }
        for (let j = 1; j <= (2 * i) - 1; j++) { //Stars
            process.stdout.write("*");
        }
        console.log();
    }

    //2nd Half
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) { //spaces
            process.stdout.write(" ");
        }
        for (let j = 1; j <= (2 * i) - 1; j++) { //Stars
            process.stdout.write("*");
        }
        console.log();
    }
}


// 7. X Star pattern ->
function xStarPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
        if(i == j || i + j == n + 1) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
        console.log();
    }
}


// 8. V Star Pattern
function VStarPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <=(2 * n) - 1; j++) {
        if(i == j || i + j == 2 * n) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
        console.log();
    }
}

// 9. Mirror Right Angled Number Pattern
function mirrorNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let s = i; s < n; s++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + "");
    }
    console.log();
  }
}


// 10. Increasing Right Angled Number Pattern
function increasingNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= i + i - 1; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

rightAngledTriangleStar(4);
console.log();
rightAngledTriangleNumber(4);
console.log();
rightAngledTriangleAlphabet(4);
console.log();
invertedRightAngledTriangleStar(4);
console.log();
mirrorRightAngledTriangleStar(4);
console.log();
diamondPattern(4);
console.log();
xStarPattern(5);
console.log();
VStarPattern(5);
console.log();
mirrorNumberPattern(5);
console.log();
increasingNumberPattern(5);

