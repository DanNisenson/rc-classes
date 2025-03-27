const arr = [1, 2, 3, 4, 5];

let temp = 0;

for (let item of arr) {
    console.log("", temp, "+", item);
    temp = temp + item;
    console.log("=", temp);
}

console.log("result", temp);
