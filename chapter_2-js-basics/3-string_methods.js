// common string methods

let email = 'mario@thenetninja.co.uk';

// Get index of last occurrence
let lastIndexOf = email.lastIndexOf('n');
console.log(lastIndexOf);

// Slice a section from the string
let slice = email.slice(0, 5); // from index, to index
console.log(slice);

// Sub string from the string
let subString = email.substring(4, 10); // from index, length
console.log(subString);

// Replace first occurrence in string
let replace = email.replace('m', 'w');
console.log(replace);

// Replace all occurrences in string
let replaceAll = email.replaceAll('n', 'w');
console.log(replaceAll);