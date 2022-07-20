const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('you clicked me');
});

const items = document.querySelectorAll('li');

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target); // get the clicked item
        item; // can also get target item from outer loop (forEach)

        e.target.style.textDecoration = 'line-through';

        console.log('item clicked');
    })
});