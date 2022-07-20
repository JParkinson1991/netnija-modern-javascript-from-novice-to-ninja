const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;
people.forEach((name) => {
    html += `<li style="color: purple;">${name}</li>`;
});

// get a reference to the ul, insert generated list
const ul = document.querySelector('ul.people');
ul.innerHTML = html;