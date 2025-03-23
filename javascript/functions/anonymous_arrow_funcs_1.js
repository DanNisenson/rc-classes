// people got tired of writing the word "function" all the time
// so they created "arrow functions", a new syntax which is the standard now
// it works the same as a normal function

const multiply = (a, b) => {
    return a * b;
};

// if there's no arguments we use empty parenthesis (like in the normal function syntax)

const greeting = () => {
    console.log("Hello world");
};

// to write even less, there's a couple of short-hand versions
// if the function has only one argument, there's no need to write parenthesis ()

const double = num => {
    return num * 2;
};

// if the function only returns something (is just one line),
// we can skip the curly braces and the "return" keyword

const triple = num => num * 3;

// we can also use this syntax for anonymous functions

myButton.onclick = () => alert("Button clicked");
