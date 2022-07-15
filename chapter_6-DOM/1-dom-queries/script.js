// Querying the dom
// Query against the 'document' object

// Query selector will return the first matched element from the DOM
const para = document.querySelector('p');
console.log(para);

// Against returning first matched element (p tag, not div tag)
const error = document.querySelector('.error');
console.log(error);

// Query the div with error class
const divError = document.querySelector('div.error');
console.log(divError);

// Get multiple elements, returns a collection of elements (NodeList)
const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[0]); // can use square bracket notation for accessing

// forEach also available
paras.forEach((para) => {
    console.log(para);
});

// Get all errors (anything with error class), returns NodeList
const errors = document.querySelectorAll('.error');
console.log(errors);