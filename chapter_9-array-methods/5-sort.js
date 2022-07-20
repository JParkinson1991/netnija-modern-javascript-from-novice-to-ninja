// example 1 - sorting string
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// By default, .sort() will sort strings alphabetically
// Note that .sort() will not create new array, instead alters the actioned array
names.sort();

// Similar but not really, array elements can be reversed
// names.reverse()

// To get z-a ordering you can chain methods
// names.sort().reverse();

console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// Notice how sorting numbers will evaluate as string, so look at first 'character' then second etc
// So we see an order of [..., 45, 5, ...]
// scores.sort();
// console.log(scores);

// See player sort for rationale
scores.sort((a, b) => (a - b));

console.log(scores);

// example 3 - sorting objects
const players = [
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 },
];

// In built/default sort algorithm will not work with complex data structure
// In these instances a compare function must be provided
// Compare functions return values:
//   a to come first: return -1 (or any negative integer)
//   b to come first: return 1 (or any positive integer)
//   a and b equal: return 0
players.sort((a, b) => {
    if (a.score === b.score) {
        return 0;
    }

    return (a.score > b.score)
        ? -1
        : 1;
});

// Simplified version of the above, simply return difference in scores
// Minus a from b, because if b is bigger we want a positive number (a = 50, b = 60, b-a = 10, a-b = -10)
// Note a.score - b.score can be used to sort in reverse
players.sort((a, b) => (b.score - a.score));

console.log(players);
