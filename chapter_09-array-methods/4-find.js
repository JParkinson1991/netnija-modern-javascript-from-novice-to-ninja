const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// .find() returns the first element in an array that passes a given a callback function (evaluates to true)
// For example, find the first score over 50

const firstHighScore = scores.find(score => (score > 50));

console.log(firstHighScore);
