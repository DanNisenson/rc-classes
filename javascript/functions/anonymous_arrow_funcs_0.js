// anonymous means "without name"
// we use them when we don't want to reuse the logic somewhere else

myButton.onclick = function () {
    alert("Button clicked!");
};

// we can also assign them to a constant

const showAlert = function () {
    alert("Button clicked!");
};

// then we can use the reference and call the function as usual

console.log("show alert reference", showAlert);

showAlert();

myButton.onclick = showAlert;
