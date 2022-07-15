let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators: +, -, *, /, **, %
console.log(10 / 2);

// Modulo/remainder
let modulo = radius % 3;
console.log(modulo);

let circleArea = pi * (radius**2);
console.log(circleArea);

// order of operation: B I D M A S
let bidmas = 5 * (10 - 3)**2;
console.log(bidmas);

// shorthand operators
let likes = 10;
likes = likes + 1; // 11
likes++; // 12
likes--; // 11
likes += 10; // 21
likes -= 5; // 16
likes *= 2; // 32
likes /= 4; // 8
console.log(likes);

// NaN - triggered when result/calculation operated on non numbers
console.log(5 / 'hello');

// Concatenation
let concat = 'the blog has ' + likes + ' likes';
console.log(concat);