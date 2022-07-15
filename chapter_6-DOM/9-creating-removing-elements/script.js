const items = document.querySelectorAll('li');

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        // Remove the clicked element
        e.target.remove();
    })
});

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // Creating the new li element
    // option 1 - manipulate innerHtml
    // ul.innerHTML += '<li>something new</li>';
    // option 2 - create new element
    const li = document.createElement('li');
    li.textContent = 'something new to do';

    // Adding the newly created element
    // Can either be appended or prepended
    //ul.prepend(li);
    ul.append(li);

    // Note how the click, removal event doesn't trigger for newly create li elements
});