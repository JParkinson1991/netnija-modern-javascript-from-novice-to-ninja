// regular function
// const calcArea = function(radius) {
//     return 3.14 * (radius**2);
// }

// arrow function
const calcArea1 = (radius) => {
     return 3.14 * (radius**2);
};

// when there is a single parameter no brackets required
// Note brackets ARE required when no parameters
const calcArea2 = radius => {
    return 3.14 * (radius**2);
};

// When function has a single return line, no curly braces required, nor return statement
const calcArea3 = radius => 3.14 * (radius**2);

// For clarity, recommendation when using arrow functions is to always include brackets and curly braces (calcArea1)

const area = calcArea3(5);
console.log(area);


// Practice arrow functions

// Convert
const greet = function() {
    return 'hello world';
};

const greetArrow = () => {
    return 'hello world';
};

const greetArrow2 = () => 'hello world';

// Convert
const bill = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.left; i++) {
        total += products[i] + (products[i] * tax);
    }
    return total;
};

const billArrow = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.left; i++) {
        total += products[i] + (products[i] * tax);
    }
    return total;
};