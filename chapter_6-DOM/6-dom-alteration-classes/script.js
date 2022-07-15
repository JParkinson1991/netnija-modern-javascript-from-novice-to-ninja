const content = document.querySelector('p');

// DomTokenList
console.log(content.classList);

// Add/remove classes
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// Get all p tags
const paras = document.querySelectorAll('p');

// Loop p tags applying relevant classes based of text content
// Note that innerText only returns visible content, use textContent when parsing
paras.forEach((para) => {
    if (para.textContent.includes('success')) {
        para.classList.add('success');
    }

    if (para.textContent.includes('error')) {
        para.classList.add('error');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
