const products = [
    { name: 'gold star', price: 30 },
    { name: 'green shell', price: 10 },
    { name: 'red shell', price: 40 },
    { name: 'banana skin', price: 5 },
    { name: 'mushroom', price: 50 }
];

// Example, filter array to remove any product costing less than 20 then map to new array of sale prices

// Long hand (no chaining)
// const filtered = products.filter(product => (product.price > 20));
// const promos = filtered.map(product => {
//     return `the ${product.name} is 50% off now costing ${product.price / 2} pounds`
// });

// With method chaining
const promos = products
        .filter(product => (product.price > 20))
        .map(filteredProduct => {
            return `the ${filteredProduct.name} is 50% off now costing ${filteredProduct.price / 2} pounds`
        });

console.log(promos);

// Note that method chaining is not fixed to array usage, can be used on all methods as long as result of previous
// chained method is compatible with arguments/requirements of subsequent method
