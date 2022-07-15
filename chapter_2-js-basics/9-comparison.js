let age = 25;

// loose comparison (different types can still be equal)
console.log(age == 25);
console.log(age == '25'); // auto type conversion
console.log(age != 25);
console.log(age != '25');

// strict comparison (compare value and type)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');