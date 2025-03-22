// We want to add taxes to the items prices and print a list of them

const foods = [
    { id: 1, name: "pizza", price: 10 },
    { id: 2, name: "soup", price: 5 },
    { id: 3, name: "biryani", price: 15 },
];

const totalPricesList = [];

const pizzaPrice = foods[0].price;
const pizzaTax = pizzaPrice * 0.2;
const pizzaTotal = pizzaPrice + pizzaTax;
totalPricesList.push(pizzaTotal);

const soupPrice = foods[1].price;
const soupTax = soupPrice * 0.2;
const soupTotal = soupPrice + soupTax;
totalPricesList.push(soupTotal);

const biryaniPrice = foods[2].price;
const biryaniTax = biryaniPrice * 0.2;
const biryaniTotal = biryaniPrice + biryaniTax;
totalPricesList.push(biryaniTotal);

console.log(totalPricesList);
