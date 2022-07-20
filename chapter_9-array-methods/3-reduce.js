const scores = [10, 20, 60, 40, 70, 90, 30];

// Reduce method iterators, applies a callback function to each item but doesn't necessarily return an array
// For example, use the reduce method to return how many scores > 50
// acc: (accumulator) can hold persistent values across all iterations, return value of previous iteration used as
//      the 'acc' value passed to the next iteration
// curr: (current) current array item being iterated
// After all iterations complete, accumulator returned
const result = scores.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }

    return acc; // pass back to next iteration
}, 0); // Second argument (after callback function) used to initialise the 'acc' variable for the first iteration

console.log('over 50:', result);

const playerScores = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
];

const marioTotalScore = playerScores.reduce((acc, curr) => {
    // Only increment accumulator with scores for mario
    if (curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log('mario total:', marioTotalScore); // expect 120
