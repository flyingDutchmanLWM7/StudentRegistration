/*--- destructuring ---*/

// array
const colors = ["red", "green", "blue"];
const [,green,blue] = colors;

// console.log(red);
console.log(green);
console.log(blue);

// object
const product = {
    productName: "computer",
    price: 30000,
    amount: 10
}
const {productName, price, amount} = product;
console.log(productName, price, amount);

