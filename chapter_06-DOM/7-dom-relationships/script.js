const article = document.querySelector('article');

// article.children is HTMLCollection
console.log(article.children);

// cannot loop HTMLCollection, convert to array
// Array.from requires argument to implement the interface ArrayLike
// Array.from does not alter original value
// console.log(Array.from(article.children));

// Add class to each child of parent element
Array.from(article.children).forEach((child) => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

// Query element parents
// title.parentElement returns HTMLElement
console.log(title.parentElement);
console.log(title.parentElement.parentElement); // calls can be chained

// Query siblings
// title.nextElementSibling => Element|null
console.log(title.nextElementSibling); // get next sibling
console.log(title.previousElementSibling); // get previous sibling

// Chaining, traversing the dom
console.log(title.nextElementSibling.parentElement.children);