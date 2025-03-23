// a function can also return a function reference

function createDiscount(amount) {
    function discount(price) {
        return price - amount;
    }

    return discount;
}

const discount10euros = createDiscount(10);
const discount50euros = createDiscount(50);

const price = 100;

console.log("discount 10", discount10euros(price));
console.log("discount 50", discount50euros(price));
