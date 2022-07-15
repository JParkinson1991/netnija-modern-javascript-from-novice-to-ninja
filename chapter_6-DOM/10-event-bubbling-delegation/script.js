const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);
});

const items = document.querySelectorAll('li');

/**
 *  Add event listeners to each element manually without event delegation
 *
items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.remove();

        // Events will bubble upwards through all parent elements of the element that listened to the 'event'
        // Example: li is clicked, callback fires, parent ul has 'click' event listener so that callback fires and so on
        // To avoid this bubbling, use the stopPropagation() method on the event
        e.stopPropagation();
    })
});

 // Note how this is trigger on li click when event is allowed to propagate/bubble
 ul.addEventListener('click', () => {
    console.log('got clicked');
});

 */

// Event delegation, attach to parent node
// Nestle down into child element afterwards
// Removes the need to manually attach event listener to be attached to each individual li element
// Also enables, js created li elements (on button click) to be handled
ul.addEventListener('click', (e) => {
    // Make sure the event target is an li before actioning
    // Note that tag names are always in uppercase in the tagName property
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})