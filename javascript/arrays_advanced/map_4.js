// Instead of declaring a function we can write an anonymous function

const foods = [
    { id: 1, name: "pizza", price: 10 },
    { id: 2, name: "soup", price: 5 },
    { id: 3, name: "biryani", price: 15 },
];

const totalPricesList = foods.map((food) => {
    const price = food.price;
    const tax = price * 0.2;
    return price + tax;
});

console.log(totalPricesList);
