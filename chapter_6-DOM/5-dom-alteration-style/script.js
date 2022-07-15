const title = document.querySelector('h1');

// setAttribute completely overwrites existing attribute definitions
// title.setAttribute('style', 'margin: 50px;');

// Use element style object (CSSStyleDeclaration) to read/write individual styles
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';

// - in property name replaced with camelCase
title.style.fontSize = '60px';

// Deleting styles
title.style.margin = '';

// Recommendation to use class additional/removal to handle style changes