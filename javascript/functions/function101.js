// inputs (arguments)
function greeting(name, lastname = '', something) {
    return 'Hello ' + name + lastname
}

console.log(greeting('Mikhail'))
console.log(greeting())

// function reference
// function greeting(name) {
//     return "hello" + name;
// }

// const myFunc = greeting;

// console.log(myFunc());

// anonymous function
// const myFunc2 = function () {
//     return 2;
// };

// console.log(myFunc2());

// arrow functions

// const sum = (name, lastname) => {
//     return "hello " + name + lastname;
// };

// console.log(sum("dan", "nisenson"));

// const hello = name => {
//     return 'hello ' + name
// }
// const hello = name => 'hello ' + name

// console.log(hello("dan"));