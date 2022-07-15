// Math object

console.log(Math);

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area)); // removes decimal, leaving the integer

// Common use case, generate random numbers
const random = Math.random(); // always between 0-1

console.log(random);
console.log(Math.round(random * 100));