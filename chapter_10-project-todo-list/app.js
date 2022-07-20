const addForm = document.querySelector('form.add');
const searchForm = document.querySelector('form.search');
const todoList = document.querySelector('ul.todos');

/**
 * Adds a new todos item with a given label to the todos list
 *
 * @param {string} label
 *     The label of the item to be added
 *
 * @return {void}
 */
const addTodo = (label) => {
    todoList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${label}</span>
            <i class="delete far fa-trash-alt"></i>
        </li>
    `;
}

/**
 * Filters the list of todos based on label matching the given search term
 *
 * Does not alter the dom, instead, applies required classes to be targeted by css
 *
 * @param {string} searchTerm
 *     The search term in which todos label must match
 *
 * @return {void}
 */
const filterTodo = (searchTerm) => {
    /*
    Array.from(todoList.children)
        .filter(item => (item.textContent.includes(searchTerm) === false))
        .forEach(item => item.classList.add('hidden'));

    Array.from(todoList.children)
        .filter(item => (item.textContent.includes(searchTerm)))
        .forEach(item => item.classList.remove('hidden'));
     */

    // Lower case searchTerm, ensures matches regardless of casing when item textContent also lower cased
    searchTerm = searchTerm.toLowerCase();

    Array.from(todoList.children).forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }
    });
}

/**
 * Handled 'add todos' form submission
 */
addForm.addEventListener('submit', e => {
    e.preventDefault(); // stop page from reloading

    // Get input value trim whitespace
    // form inputs can be referenced by name as properties
    const todoValue = addForm.todo.value.trim();

    // Reset the form's input fields, do this regardless of trimmed length check
    // Handle cases where input contains only spaces etc
    addForm.reset();

    // Ignore empty todos
    if (todoValue.length === 0) {
        return;
    }

    // Add to the list
    addTodo(todoValue);
});

/**
 * Handles deletion of todos within the list (click of the delete icon)
 */
todoList.addEventListener('click', e => {
    // If a delete icon was clicked (determined via class list)
    if (e.target.classList.contains('delete') === false) {
        // Get the target (the delete icon), find the parent li, remove it
        e.target.parentElement.remove();
    }

    // Get the target (the delete icon), find the parent li
    e.target.parentElement.remove();
});

/**
 * Handles filtering of the list of items, or where escape pressed, clearing of the form
 */
searchForm.search.addEventListener('keyup', (e) => {
    let searchTerm = searchForm.search.value.trim();

    // Reset the search form and pass empty search term (reshow all todos list again)
    if (e.key === "Escape") {
        searchForm.reset();
        searchTerm = '';
    }

    filterTodo(searchTerm);
});

/**
 * Disables form submissions on search form
 */
searchForm.addEventListener('submit', e => {
    e.preventDefault();
});
