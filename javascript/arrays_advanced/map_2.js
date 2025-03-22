// We could extract the logic to their own function to make it more readable

const foods = [
    { id: 1, name: "pizza", price: 10 },
    { id: 2, name: "soup", price: 5 },
    { id: 3, name: "biryani", price: 15 },
];

const calculateTotalPrice = (food) => {
    const price = food.price;
    const tax = price * 0.2;
    return price + tax;
};

const totalPricesList = [];

for (const food of foods) {
    const total = calculateTotalPrice(food);
    totalPricesList.push(total);
}

console.log(totalPricesList);
