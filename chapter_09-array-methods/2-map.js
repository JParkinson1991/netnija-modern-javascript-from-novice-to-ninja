const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// Map method applies defined callback to every item in an array storing results into new array
const salePrices = prices.map((price) => {
    return (price / 2); // 50% off
});
// Can be shortened to:
// const salePrices = prices.map(price => (price / 2));

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

// 50% off products > 30 in price
// As handling an array of objects, object 'passed by reference' therefore we must ensure that alterations made
// to the input products do not 'bubble' out of the mapped result and back into the source array
// I.e. do not alter the values on the incoming product object, instead create new objects as required
// @see chapter_05-object-literals/6-primitive-references.js
// Still question marks on how to clone incoming object so knowledge of only the data being altered is required
// For example, if products now have more properties, then the new object created below will need more properties..
const saleProducts = products.map(product => {
    let price = (product.price > 30)
        ? (product.price / 2)
        : (product.price);

    return {
        name: product.name,
        price: price
    }
});

console.log(saleProducts);
