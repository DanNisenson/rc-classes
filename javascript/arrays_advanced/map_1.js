// We can improve a lot by using a loop

const foods = [
    { id: 1, name: "pizza", price: 10 },
    { id: 2, name: "soup", price: 5 },
    { id: 3, name: "biryani", price: 15 },
];

const totalPricesList = [];

for (const food of foods) {
    const price = food.price;
    const tax = price * 0.2;
    const total = price + tax;
    totalPricesList.push(total);
}

console.log(totalPricesList);
