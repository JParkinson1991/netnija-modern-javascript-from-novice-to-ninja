// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);

// Get property value
console.log(user.name);

// Update property value
user.age = 35;
console.log(user.age);

// Square bracket notation, pass property name as string
console.log(user['age']);
user['name'] = 'chun-li';
console.log(user['name']);

// Useful when variable used as property name
// Variables cannot be used with dot notation
const key = 'location';
console.log(user[key]);

// Objects are 'object' type
console.log(typeof user);