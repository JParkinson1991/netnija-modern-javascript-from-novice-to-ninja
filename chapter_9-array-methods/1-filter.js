const scores = [10, 30, 15, 25, 50, 40, 5];

// Extract all the scores that >= 20
// Filter method is non-destructive, that is, it does not alter the input array instead returning the resultant
// const filteredScores = scores.filter((score) => {
//     return score >= 20;
// });

const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true },
];

const premiumUsers = users.filter(user => (user.premium === true));
// Longhand
// const premiumUsers = users.filter((user) => {
//     return (user.premium === true);
// });

console.log(premiumUsers);
