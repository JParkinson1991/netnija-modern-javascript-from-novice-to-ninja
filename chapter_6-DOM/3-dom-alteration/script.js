// DOM alteration

// Get first p tag on page
const para = document.querySelector('p');

// Get inner text of element (property not method)
console.log(para.innerText);

// Update the inner text
// This will also update the html (or DOM) rendered on the page
para.innerText = 'ninjas are awesome';

// Append to the text
para.innerText += ', are they not!';

// Grab all the p tags, output the text, append to the text
const paras = document.querySelectorAll('p');
paras.forEach((para) => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

// Changing html inside an element
const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach((person) => {
    content.innerHTML += `<p>${person}</p>`;
});
