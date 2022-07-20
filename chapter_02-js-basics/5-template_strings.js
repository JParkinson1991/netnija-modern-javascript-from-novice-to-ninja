// Template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// Concatenation method
let concat = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(concat);

// Template string/literal method
let template = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(template);

// Creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);