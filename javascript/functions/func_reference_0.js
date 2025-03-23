// when we want to execute a function we make a function call
// but we can also pass a function as a value
// we say we "reference" the function
// what we mean is we point to the function instead of executing it

function add(a, b) {
    return a + b;
}

// here we log the result of the function call
console.log("add call", add(1, 2));
// here we log the function reference
console.log("add reference", add);

// we can use the reference as a value
const myFunction = add;

console.log("myFunction reference", myFunction);

// and call it!
console.log("myFunction call", myFunction(1, 2));
