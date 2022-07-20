// testing Regex
const testString = 'shaunp';
const pattern = /^[a-z]{6,}$/; // note patterns aren't quoted

// pattern first - 'test' method returns booleans
let result = pattern.test(testString);
//console.log(`regex test ${(result === true) ? 'passed': 'failed'}`)

// test string first - 'search' returns an integer (starting index of match)
result = testString.search(pattern);
//console.log(`search regex test ${(result !== -1) ? 'passed' : 'failed'}`);

// ----------------

const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;

// Submit event handled at form, not the submit button
form.addEventListener('submit', (e) => {
    // Prevents default form submission
    e.preventDefault();

    // Input values stored in .value property
    //console.log(username.value);

    // Instead of referencing inputs directory through document.querySelector (for example)
    // Dot notation can be used to get inputs within a form
    // .username => input#username|input[name="username"] (within the form)
    //console.log(form.username.value);

    // validation
    // username must be 6-12 chars containing only a-z case-insensitive.
    const usernameValue = form.username.value;
    feedback.textContent = (usernamePattern.test(usernameValue) === true)
        ? 'that username is valid.'
        : 'username must contain letters only and be between 6-12 characters long.'
});

// Live feedback on username field
form.username.addEventListener('keyup', (e) => {
    // Both methods work in getting the value of the input
    // console.log(e.target.value, form.username.value);

    if (usernamePattern.test(e.target.value) === true) {
        e.target.setAttribute('class', 'success');
    }
    else {
        e.target.setAttribute('class', 'error');
    }

    console.log(e);
});