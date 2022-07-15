// primitive values
// stores value in stack

let score1 = 50;
let score2 = score1;

console.log(`Score 1: ${score1}`, `Score 2: ${score2}`);

score1 = 100;

// Note how change of score 1 does not affect score 2
console.log(`Score 1: ${score1}`, `Score 2: ${score2}`);

// reference values
// stores pointers/references in stack and data in heap

const user1 = { name: 'ryu', age: 30 };
const user2 = user1;

console.log(user1, user2);

user1.age = 40;

// Note how change of user 1 age affects user 2
console.log(user1, user2);