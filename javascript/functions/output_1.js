// our function can output the result instead
// and we do whatever we want with the result

function double(number) {
    return number * 2;
}

// we can save the result to a variable
const result1 = double(1238.52);
console.log("result 1", result1);

const result2 = double(95482342.5454236);
console.log("result 2", result2);

// now we can use the result again if we need
console.log("result 1 again", result1);

// or we can output the result directly if we dont want to reuse it
// and and we don't need a variable to store it, making the code cleaner and more efficient
console.log(double("single use", 67254.32478));
