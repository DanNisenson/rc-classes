1. what are we going to see in the console when this runs?

```js
function first() {
    console.log("Milk");
    third();
}

function second() {
    console.log("Bread");
}

function third() {
    console.log("Oil");
    second();
}

first();
```

2. write a function that takes two numbers as arguments
   and returns their sum
   use it to sum 20 and 30 and log the result to the console

3. write a function that takes an array of numbers
   and returns the sum of all the numbers in the array
   use it to sum [1, 2, 3, 4, 5] and log the result to the console
