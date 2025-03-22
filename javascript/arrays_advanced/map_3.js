// With map we don't even have to write the loop

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

const totalPricesList = foods.map(calculateTotalPrice);

const a = 23;

console.log(totalPricesList);
