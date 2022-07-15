// type conversion
let score = '100';

console.log(score + 1); // 1 cast to string, result: 1001 (implicit)

score = Number(score);
console.log(score + 1); // 101

// Checking types of variable - typeof
console.log(typeof score);

// Converting none viable strings to numbers (explicit)
let nan = Number('hello');
console.log(nan); // NaN

// Number to string (explicit)
let string = String(50);
console.log(string, typeof string);

// To booleans (explicit)
let bool = Boolean(100);  // All numbers truthy except 0
console.log(bool, typeof bool);

bool = Boolean('0');
console.log(bool, typeof bool); // Strings of any length are truthy, '' is falsy