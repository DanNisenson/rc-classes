// we can also pass a function reference a another function as an argument

// calculator
// user inputs 1st number
// user selects operation
// user inputs 2nd number
// user press equal (=) to get the result

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function equal(a, b, op) {
    return op(a, b);
}

const numberA = 4;
const operation = multiply;
const numberB = 4;
const result = equal(numberA, numberB, operation);

console.log("result", result);
