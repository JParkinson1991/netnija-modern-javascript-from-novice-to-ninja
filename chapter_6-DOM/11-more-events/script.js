// When mouse moves inside an element
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('oi! my content is copyright')
});


// When mouse moves inside an element
const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
    // e.offsetX - position of mouse pointer from left side of the element
    // e.OffsetY - position of mouse pointer from top of the element
    box.textContent = `x pos - ${e.offsetX}, y pos - ${e.offsetY}`;
});

// Events can be added to entire DOM
document.addEventListener('wheel', (e) => {
    // e.pageX - position of cursor relative to the left of the document
    // e.pageY - position of cursor relative to the top of the document
    console.log(e.pageX, e.pageY);
});