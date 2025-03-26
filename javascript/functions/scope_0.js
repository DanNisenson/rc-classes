// global scope
const product1 = "milk";

// local scope
function getMilk() {
    const product2 = "butter";
    console.log(product2);
    console.log(product1);
}

getMilk();

// console.log(product1);
// console.log(product2);
