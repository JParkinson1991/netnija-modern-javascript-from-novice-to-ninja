// Strings
console.log('Hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// String concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson'

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]); // js is zero based language, counts from 0

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName); // note casing methods don't affect original string

let index = email.indexOf('@');
console.log(index);