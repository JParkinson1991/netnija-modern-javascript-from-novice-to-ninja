// Define list of values as array
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = 'ken'; // Override value
console.log(ninjas);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// Array length
console.log(ninjas.length);

// Join array elements to single string with separator
let join = ninjas.join(',');
console.log(join);

// Index of value
let indexOf = ninjas.indexOf('chun-li');
console.log(indexOf);

// Concat/join multiple arrays
let concat = ninjas.concat(['ben', 'crystal']);
console.log(concat);

// Push a new value onto the end of an array, returns the length of array post push
let pushLength = ninjas.push('ben');
console.log(pushLength);

// Removes and returns end value from array
let pop = ninjas.pop();
console.log(pop);