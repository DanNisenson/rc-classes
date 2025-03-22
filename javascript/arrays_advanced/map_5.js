// And this one just for fun

const foods = [
    { id: 1, name: "pizza", price: 10 },
    { id: 2, name: "soup", price: 5 },
    { id: 3, name: "biryani", price: 15 },
];

const totalPricesList = foods.map((food) => food.price + food.price * 0.2);

console.log(totalPricesList);
