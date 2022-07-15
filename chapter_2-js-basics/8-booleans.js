// booleans & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';

let includesAt = email.includes('@'); // true
console.log(includesAt);

let includesExclamation = email.includes('!'); // false
console.log(includesExclamation);

let names = ['mario', 'luigi', 'toad'];
let namesIncludes = names.includes('bowser');
console.log(namesIncludes);

// comparison operators
let age = 25;

console.log((age === 25));
console.log((age === 30));
console.log((age !== 30));
console.log((age > 20));
console.log((age < 20));
console.log((age <= 25));
console.log((age >= 25));

let name = 'shaun';

console.log(name === 'shaun');
console.log(name === 'Shaun');
console.log(name > 'crystal'); // compares alphabetically
console.log(name > 'Shaun'); // compares alphabetically, uppercase then lowercase
console.log(name > 'Crystal');

// == loose equality