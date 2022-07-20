// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name (returns HTMLCollection)
// like NodeList (querySelectorAll) we can still use square bracket notation, but cannot use forEach
const errors = document.getElementsByClassName('error');
console.log(errors[0]);
console.log(errors);

// get elements by their tag name (returns HTMLCollection, see above)
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);