const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('form');
const result = document.querySelector('.result');
const resultPercentage = result.querySelector('span');

form.addEventListener('submit', (e) => {
    // Stop default action, i.e. page redirect to action href
    e.preventDefault();

    // Store user answers
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value
    ];

    // Calculate user score from form values
    let score = 0;
    userAnswers.forEach((answer, i) => {
        if (typeof correctAnswers[i] !== 'undefined' && answer.toUpperCase() === correctAnswers[i]) {
            score++;
        }
    });

    // Determine percentage from score
    const scorePercentage = (score === 0)
        ? 0
        : ((score / userAnswers.length) * 100);

    // Set the result percentage to be displayed
    // See animation below
    // resultPercentage.textContent = `${scorePercentage}%`;

    // Display the result
    result.classList.remove('d-none');

    // Scroll to the top of the page
    // Note that window is the global object and therefore inclusion of 'window.' is not required as it's exclusion
    // would infer the use of the global window object
    // Example: .scrollTo() would achieve the same as below
    // Example: console.log() === window.console.log()
    // Example: alert() === window.alert()
    window.scrollTo(0,0);

    // Animate the score
    let outputScore = 0;
    const animatedScore = setInterval(() => {
        resultPercentage.textContent = `${outputScore}%`

        // Once displaying the score the user attained, clear interval, stop incrementation
        if (outputScore === scorePercentage) {
            clearInterval(animatedScore);
        }

        outputScore++;
    }, 10);
});