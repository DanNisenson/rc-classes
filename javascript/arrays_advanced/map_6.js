// What JavaScript does behind the scenes

/**
 * When we declare an array, JS stores is as something similar to this
 * It saves the items, and also generates the array methods we know
 */
const foods = {
    items: [
        { id: 1, name: "pizza", price: 10 },
        { id: 2, name: "soup", price: 5 },
        { id: 3, name: "biryani", price: 15 },
    ],

    push(item) {
        const temp = [];

        temp[0] = item;

        for (let i = 0; i < this.items.length; i++) {
            temp[i + 1] = this.items[i];
        }

        this.items = temp;
    },

    pop() {
        const temp = [];
        const lastItem = this.items[this.items.length - 1];

        for (let i = 0; i < this.items.length - 1; i++) {
            temp[i + 1] = this.items[i];
        }

        this.items = temp;

        return lastItem;
    },

    map(callback) {
        const newArray = [];

        for (const element of this.items) {
            newArray.push(callback(element));
        }

        return newArray;
    },
};

const totalPricesList = foods.map((food) => food.price + food.price * 0.2);

console.log(totalPricesList);

// map is called
// creates a new array
// loop over foods array
// executes the anonymous function, passing foods[0] as argument
// stores result in new array, position 0
